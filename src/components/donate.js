import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { useHistory } from "react-router-dom";

// PAGES
import Header from "./layout/header";
import Footer from "./layout/footer";

// IMAGES
import qrcode from "./../assets/images/qrcode.png";
import scan from "./../assets/images/scan.gif";
import { customAlert, inputGetter } from "../helpers";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { submitDonation } from "../api/FirebaseHelper";
import loading from "../assets/images/loading.gif";
import Swal from "sweetalert2";

export default function Donate() {
  const [step, setStep] = useState(0);
  const [userData, _] = useState({});
  const history = useHistory();

  return (
    <div>
      <Header />
      {/* DONATION TITLE  */}
      <div className="donation_title mt-5">
        <p className="dopnatetitle">DONATE NOW, SAVE LIVES !</p>
        <p className="donatep">
          Now, more than ever, your support means everything. National Shrine of
          Our Lady of Sorrows will be your way to help families affected by
          COVID-19 in the community we serve. Faith in God are strengthen us
          despite of this crisis we can help many people.
        </p>
      </div>

      <Stepper
        steps={[{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]}
        activeStep={step}
      />

      {/* DONATION FORM  First step Fill up form*/}

      {step === 0 && (
        <div className="form_donate mt-5">
          <div className="form_title">
            <h4>Donor Details</h4>
          </div>
          <form>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  value={userData["firstName"]}
                  onChange={(value) =>
                    (userData["firstName"] = value.target.value)
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  value={userData["lastName"]}
                  onChange={(value) =>
                    (userData["lastName"] = value.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="Address*"
                  required
                  value={userData["address"]}
                  onChange={(value) =>
                    (userData["address"] = value.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input
                  type="text"
                  placeholder="City*"
                  required
                  value={userData["city"]}
                  onChange={(value) => (userData["city"] = value.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input
                  type="text"
                  placeholder="Country"
                  value={userData["country"]}
                  onChange={(value) =>
                    (userData["country"] = value.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="email"
                  placeholder="Email"
                  value={userData["email"]}
                  onChange={(value) => (userData["email"] = value.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <select
                  className="form-select"
                  value={userData["gender"]}
                  onChange={(value) =>
                    (userData["gender"] = value.target.value)
                  }
                >
                  <option defaultValue value="">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number(09XXXXXXXXX)*"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  value={userData["phoneNumber"]}
                  onChange={(value) =>
                    (userData["phoneNumber"] = value.target.value)
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" GCash Account number(09XXXXXXXXX)*"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  value={userData["gcashNumber"]}
                  onChange={(value) =>
                    (userData["gcashNumber"] = value.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-12 mb-3">
                <input
                  type="number"
                  placeholder="Amount to be donated*"
                  required
                  value={userData["amount"]}
                  onChange={(value) =>
                    (userData["amount"] = value.target.value)
                  }
                />
              </div>
            </div>
          </form>
          <div className="done_btn mt-3">
            <button
              type="button"
              onClick={() => {
                let allFilled = true;

                document.querySelectorAll("[type=tel]").forEach((element) => {
                  if (element.value.length !== 11) {
                    element.value = "";
                  }
                  element.value = element.value.replace(/[^0-9]/g, "");
                });

                document
                  .querySelectorAll("[type=number]")
                  .forEach((element) => {
                    element.value = element.value.replace(/[^0-9]/g, "");
                  });

                document.querySelectorAll("[required]").forEach((element) => {
                  element.style.border = "1px solid #c8c5c9";

                  if (element.value.length === 0) {
                    element.style.border = "1px solid red";
                    allFilled = false;
                  }
                });

                if (allFilled) {
                  setStep(1);
                } else {
                  customAlert("Please Fill all required fields", "info");
                }
              }}
              className="btn btn-primary"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 Gcash */}
      {step === 1 && (
        <div className="gcashtrans">
          <div className="gcash_instruct">
            <div>
              <h4>Please scan this code</h4>
            </div>
            <div>
              <img src={scan} alt="scan here" className="scangif" />
            </div>
          </div>

          <div className="gcash_qr">
            <img src={qrcode} alt="qrcodegcash" />
          </div>
          <div className="done_btn stepbtn mt-3">
            <button
              type="button"
              className="btn btn-primary mlr"
              onClick={() => {
                setStep(0);
              }}
            >
              Previous Step
            </button>
            <button
              type="button"
              onClick={() => {
                setStep(2);
              }}
              className="btn btn-primary mlr"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 Review the details*/}
      {step === 2 && (
        <div>
          <div className="summary">
            <div className="sum_title">
              <h4>Donor Details</h4>
            </div>
            <div className="details">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">Name</div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {userData["firstName"]}, {userData["lastName"]}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">Address</div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {userData["city"]}, {userData["address"]}
                </div>
              </div>
            </div>
            <div className="details">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  GCash Account Number{" "}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {userData["gcashNumber"]}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  Amount Donated
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">P 2500.00</div>
              </div>
            </div>
          </div>
          <div className="done_btn stepbtn mt-3">
            <button
              type="button"
              className="btn btn-primary mlr"
              onClick={() => {
                setStep(1);
              }}
            >
              Previous Step
            </button>
            <button
              type="button"
              className="btn btn-primary mlr"
              onClick={async () => {
                Swal.fire({
                  title: "Submitting",
                  html: `<img src="${loading}"/>`,
                  allowOutsideClick: false,
                  showConfirmButton: false,
                });
                if (await submitDonation(userData)) {
                  customAlert("Your Donation has been sent!", "success");
                  history.push("/donedonate");
                } else
                  customAlert(
                    "Sorry, We can't process your donation at the moment",
                    "error"
                  );
              }}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
