import React from 'react';
import {Link} from 'react-router-dom';

// PAGES
import Header from './layout/header';
import Footer from './layout/footer';

export default function DoneDonate(){
    return (
        <div>
            <Header/>
            
             {/* STEP 4 */}
             <div className="thankyou">
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
                    <p className="dopnatetitle">
                        Thank You !
                    </p>
                    <p className="donatep">
                        Your donation was successful.
                        Personal details has been submitted to the admins of National Shrine of Our Lady of Sorrows.
                    </p>
                </div>
            </div>

            <div className="backBtn mt-5">
                <Link to="/">
                    <button type="button" className="btn btn-primary">
                        Back to Home
                    </button>
                </Link>
            </div>

            <Footer/>
        </div>
    )
}