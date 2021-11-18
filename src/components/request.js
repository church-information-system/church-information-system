import React, { useState } from "react";

// PAGES
import Header from "./layout/header";
import Footer from "./layout/footer";
import { customAlert, getById, inputGetter } from "../helpers";
import Swal from "sweetalert2";
import loading from "../assets/images/loading.gif";
import { submitRequest } from "../api/FirebaseHelper";
import { useHistory } from "react-router";

export default function RequestPage() {
  const [show, setShow] = useState("emailadd");
  const history = useHistory();

  return (
    <div className="requestpage">
      <Header />

      <div className="reqtitle text-center mt-5">Request</div>
      <div className="page_intro text-center">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="request_form">
        <div className="reqform">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" id="address" />
          </div>
          <select className="form-select" id="requested">
            <option defaultValue value="">
              Please select form you want to request
            </option>
            <option value="Marriage Certificate">Marriage Certificate</option>
            <option value="Death Certificate">Death Certificate</option>
          </select>
          <div className="mt-3">
            <p>Please select how you want to get the form you requested</p>
            <div className="radio_select row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="radio"
                  name="radioform"
                  onChange={(e) => {
                    setShow("emailadd");
                  }}
                  defaultChecked={true}
                  id="sendByEmail"
                ></input>
                <label className="form-label ml-2">
                  To be sent in your email
                </label>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="radio"
                  name="radioform"
                  onChange={(e) => {
                    setShow("walkin");
                  }}
                  id="walkIn"
                ></input>
                <label className="form-label ml-2">
                  Walk in to our local church
                </label>
              </div>
            </div>

            {show === "emailadd" && (
              <div className="viaemail">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  id="emailAddress"
                />
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Please confirm Email Address"
                  id="emailAddress2"
                />
              </div>
            )}
            {show === "walkin" && (
              <div className="walkin mt-5">
                Please see us at (ADDRESS OF THE CHURCH)
              </div>
            )}
          </div>
          <button
            className="btn yellow_btn mt-5"
            onClick={async () => {
              let hasInvalid = false;

              document.querySelectorAll("input").forEach((element) => {
                if (element.value.trim().length === 0) {
                  element.style.border = "1px solid red";
                  hasInvalid = true;
                }
              });

              let firstName = inputGetter("firstName");
              let lastName = inputGetter("lastName");
              let address = inputGetter("address");
              let requested = inputGetter("requested");
              let requestMethod = getById("sendByEmail").checked
                ? "Send via email"
                : "Walk In";

              if (requested.trim().length === 0) {
                getById("requested").style.border = "1px solid red";
                hasInvalid = true;
              }

              if (hasInvalid) {
                customAlert("Please Fill all the fields", "info");
              } else {
                let record = {
                  firstName: firstName,
                  lastName: lastName,
                  address: address,
                  requestedDocument: requested,
                  requestMethod: requestMethod,
                };

                if (requestMethod === "Send via email") {
                  customAlert(
                    "Emails doesn't match, please check your input",
                    "error"
                  );

                  let email1 = inputGetter("emailAddress");
                  let email2 = inputGetter("emailAddress2");

                  if (email1 === email2) {
                    record["emailAddress"] = email1;
                    Swal.fire({
                      title: "Submitting",
                      showConfirmButton: false,
                      html: `<img src="${loading}"/>`,
                      allowOutsideClick: false,
                    });
                    if (await submitRequest(record)) {
                      customAlert(
                        "We've sent your request, please wait and we will email your document shortly",
                        "success"
                      );
                      history.push("/");
                    } else {
                      customAlert(
                        "Something went wrong please try again",
                        "error"
                      );
                    }
                  }
                } else {
                  Swal.fire({
                    title: "Submitting",
                    showConfirmButton: false,
                    html: `<img src="${loading}"/>`,
                    allowOutsideClick: false,
                  });
                  if (await submitRequest(record)) {
                    customAlert(
                      "We've submitted your request, please drop by at our local chuch to pick up your documents",
                      "success"
                    );
                    history.push("/");
                  } else {
                    customAlert(
                      "Something went wrong please try again",
                      "error"
                    );
                  }
                }
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
