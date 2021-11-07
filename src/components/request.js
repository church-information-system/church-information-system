import React from 'react';

// PAGES
import Header from './layout/header';
import Footer from './layout/footer';

export default function RequestPage () {
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
                    <option selected>Select form you want to request</option>
                    <option value="1">Marriage Certificate</option>
                    <option value="2">Death Certificate</option>
                </select>
                <button type="submit" className="btn yellow_btn mt-5">Submit</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}   