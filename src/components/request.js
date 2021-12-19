import React, { useEffect, useState } from "react";

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
  const [refresh, setRefresh] = useState(0);

  const history = useHistory();

  useEffect(() => setRefresh(1), []);

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
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <select
            className="form-select"
            id="requested"
            onChange={() => setRefresh((value) => value + 1)}
          >
            <option defaultValue value="none">
              Please select form you want to request
            </option>
            <option value="Marriage Certificate">Marriage Certificate</option>
            <option value="Death Certificate">Death Certificate</option>
          </select>
          {refresh > 0 ? (
            inputGetter("requested") === "Marriage Certificate" ? (
              <div>
                <div className="mb-3">
                  <label className="form-label">Wife's name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="husbandName"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Husband's name</label>
                  <input type="text" className="form-control" id="wifeName" />
                </div>
              </div>
            ) : inputGetter("requested") === "Death Certificate" ? (
              <div>
                <label className="form-label">Name of the Deceased</label>
                <input type="text" className="form-control" id="deceasedName" />
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          <div className="mt-3">
          <div className="walkin">
              <p>We received your request.</p>
                Please see us at the Office{" "}
                <span style={{ color: "#4C004A", fontWeight: "bold", fontSize: "20px" }}>
                National Shrine of Our Lady of Sorrows in Brgy. Silanganan, Dolores, Quezon
                </span>
              </div>
          </div>
          <div
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

                console.log(requested);
                if (requested === "Marriage Certificate") {
                  record["husbandName"] = inputGetter("husbandName");
                  record["wifeName"] = inputGetter("husbandName");
                }
                if (requested === "Death Certificate") {
                  record["fullname"] = inputGetter("deceasedName");
                }

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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
