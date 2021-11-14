import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";

// PAGES LAYOUT
import MassSched from './masssched';
import Header from './layout/header';
import Footer from './layout/footer';



// IMAGES

import donateicon from './../assets/images/donateicon.png';

import a from './../assets/images/eventchurch/a.jpg';
import b from './../assets/images/eventchurch/b.jpg';
import c from './../assets/images/eventchurch/c.jpg';
import d from './../assets/images/eventchurch/d.jpg';
import e from './../assets/images/eventchurch/e.jpg';
import f from './../assets/images/eventchurch/f.jpg';
import g from './../assets/images/eventchurch/g.jpg';
import h from './../assets/images/eventchurch/h.jpg';
import i from './../assets/images/eventchurch/i.jpg';
import j from './../assets/images/eventchurch/j.jpg';


export default function Events() {

    const [gallery1, setGallery1] = useState([
        { id: 1, img: a },
        { id: 2, img: b },
        { id: 3, img: c },
        { id: 4, img: d },
        { id: 5, img: e },
        { id: 6, img: f },
        { id: 7, img: g },
        { id: 8, img: h },
        { id: 9, img: i },
        { id: 10, img: j }
    ]);

    return (
        <div>
            {/* NAVBAR HERE */}
            <Header />
            {/* MASS SCHED */}
            <MassSched />
            <div className="lightgallery_main mt-5 mb-5">
                <h4 className="text-center">Events</h4>
                <h5 className="text-center">Canonical Coronation of Mahal Na Birheng Dolorosa</h5>
               
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <div className="row center_flex">
                            {gallery1.map((gal1) => (
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                                    <div className="image_gallery eventsItem" key={gal1.id}>
                                        <a href={gal1.img}>
                                            <div className="image">
                                                <img src={gal1.img} className="img-fluid rounded image__img" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                

            </div>

            {/* FLOATING DONATION ICON */}

            <Link to="/donate" className="donate_icon">
                <img src={donateicon} alt="donate here" />
                <div className="donate_tooltip">
                    Click here to donate
                </div>
            </Link>


            {/* FOOTER */}
            <Footer />


        </div>
    )
}