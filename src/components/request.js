import React, {useState} from 'react';

// PAGES
import Header from './layout/header';
import Footer from './layout/footer';

export default function RequestPage() {
    const [show, setShow] = useState("emailadd");

    return (
        <div className="requestpage">
            <Header />

            <div className="reqtitle text-center mt-5">
                Request
            </div>
            <div className="page_intro text-center">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="request_form">
                <form className="reqform">
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <select className="form-select" id="inputGroupSelect02">
                        <option selected>Please select form you want to request</option>
                        <option value="1">Marriage Certificate</option>
                        <option value="2">Death Certificate</option>
                    </select>
                    <div className="mt-3">
                        <p>Please select how you want to get the form you requested</p>
                        <div className="radio_select row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <input type="radio" name="radioform" value="emailadd" onChange={(e) => {setShow(e.currentTarget.value)}} defaultChecked={true}></input>
                                <label className="form-label ml-2">To be sent in your email</label>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <input type="radio" name="radioform" value="walkin" onChange={(e) => {setShow(e.currentTarget.value)}}></input>
                                <label className="form-label ml-2">Walk in to our local church</label>
                            </div>
                        </div>
                    
                       {show === "emailadd" && <div className="viaemail">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Email Address"/>
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Please confirm Email Address"/>
                        </div>}
                        {show === "walkin" && <div className="walkin mt-5">
                            Please see us at (ADDRESS OF THE CHURCH)
                        </div>}
                    </div>
                    <button type="submit" className="btn yellow_btn mt-5">Submit</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}