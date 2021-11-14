import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stepper } from 'react-form-stepper';


// PAGES
import Header from './layout/header';
import Footer from './layout/footer';

// IMAGES
import qrcode from './../assets/images/qrcode.png';
import scan from './../assets/images/scan.gif';


export default function Donate() {
    const [step, setStep] = useState(0);

    return (
        <div>
            <Header />
            {/* DONATION TITLE  */}
            <div className="donation_title mt-5">
                <p className="dopnatetitle">
                    DONATE NOW, SAVE LIVES !
                </p>
                <p className="donatep">
                    Now, more than ever, your support means everything.
                    National Shrine of Our Lady of Sorrows will be your way to help
                    families affected by COVID-19 in the community we serve.
                    Faith in God are strengthen us despite of this crisis
                    we can help many people.
                </p>
            </div>

            <Stepper
                steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
                activeStep={step}
            />

            {/* DONATION FORM  First step Fill up form*/}

            {step === 0 && <div className="form_donate mt-5">
                <div className="form_title">
                    <h4>Donor Details</h4>
                </div>
                <form>
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <input type="text" placeholder="First Name*" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="text" placeholder="Last Name*" required />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <input type="text" placeholder="Address*" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <input type="text" placeholder="City*" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <input type="text" placeholder="Country" required />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <input type="date" placeholder="Date of Birth*" required />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <select className="form-select" id="inputGroupSelect02">
                                <option selected>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                       
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <input type="tel" id="phone" name="phone" placeholder="Phone number(09XXXXXXXXX)" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <input type="tel" id="phone" name="phone" placeholder=" GCash Account number(09XXXXXXXXX)" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-12 mb-3">
                            <input type="number" placeholder="Amount to be donated" required />
                        </div>
                    </div>
                </form>
                <div className="done_btn mt-3">
                    <button type="button" onClick={() => { setStep(1) }} className="btn btn-primary">Next Step</button>
                </div>
            </div>}

            {/* STEP 2 Gcash */}
            {step === 1 && <div className="gcashtrans">
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
                    <button type="button" className="btn btn-primary mlr" onClick={() => { setStep(0) }}>Previous Step</button>
                    <button type="button" onClick={() => { setStep(2) }} className="btn btn-primary mlr">Next Step</button>
                </div>

            </div>}


            {/* STEP 3 Review the details*/}
            {step === 2 && <div>
                <div className="summary">
                    <div className="sum_title">
                        <h4>Donor Details</h4>
                    </div>
                    <div className="details">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Name
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Sample Name
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Address
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Sample Address
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Date of Birth
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Sample birthday
                            </div>
                        </div>
                    </div>
                    <div className="sum_title">
                        <h4>Payment Details</h4>
                    </div>
                    <div className="details">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                GCash Account Number
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Sample GCash Account Number
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                Amount Donated
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                P 2500.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="done_btn stepbtn mt-3">
                    <button type="button" className="btn btn-primary mlr" onClick={() => { setStep(1) }}>Previous Step</button>
                    <Link to="/donedonate">
                        <button type="button" className="btn btn-primary mlr">Next Step</button>
                    </Link>
                </div>

            </div>
            }

            <Footer />
        </div>
    )
}