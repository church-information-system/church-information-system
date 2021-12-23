import React from 'react';

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox";

// PAGES
import Header from './layout/header';
import Footer from './layout/footer';

// images
import img1 from './../assets/images/img1.jpg';
import img2 from './../assets/images/img2.jpg';
import img3 from './../assets/images/img3.jpg';
import img4 from './../assets/images/img4.jpg';
import img5 from './../assets/images/img5.jpg';
import img6 from './../assets/images/img6.jpg';
import img7 from './../assets/images/img7.jpg';
import virtual from './../assets/images/virtual.mp4';
// PANORAMAS
import pano1 from './../assets/images/churchphoto/pano1.jpg';
import pano2 from './../assets/images/churchphoto/pano2.jpg';
import pano3 from './../assets/images/churchphoto/pano3.jpg';
import pano4 from './../assets/images/churchphoto/pano4.jpg';
import pano5 from './../assets/images/churchphoto/pano5.jpg';
import pano6 from './../assets/images/churchphoto/pano6.jpg';
import pano7 from './../assets/images/churchphoto/pano7.jpg';
import pano8 from './../assets/images/churchphoto/pano8.jpg';
import pano9 from './../assets/images/churchphoto/pano9.jpg';
import pano10 from './../assets/images/churchphoto/pano10.jpg';

export default function VirtualTour() {
    return (
        <div>
            {/* HEADER */}
            <Header />
            <div className="page_title mt-5 mb-5">
                Church Virtual Tour
            </div>

            {/* VIRTUAL TOUR PHOTO AND 3D */}
            <div className="row margin">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <div className="img_line">
                                <div className="img_item">
                                    <img src={img1} alt="virtualphoto" />
                                </div>
                                <div className="img_item">
                                    <img src={img2} alt="virtualphoto" />
                                </div>
                                <div className="img_item">
                                    <img src={img3} alt="virtualphoto" />
                                </div>
                                <div className="img_item">
                                    <img src={img4} alt="virtualphoto" />
                                </div>
                                <div className="img_item">
                                    <img src={img5} alt="virtualphoto" />
                                </div>
                                <div className="img_item">
                                    <img src={img6} alt="virtualphoto" />
                                </div>
                                <div className="img_item">
                                    <img src={img7} alt="virtualphoto" />
                                </div>
                            </div>

                        </SRLWrapper>
                    </SimpleReactLightbox>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="virtualtour">
                        <video
                            src={virtual}
                            width="1200px"
                            height="700px"
                            className="video"
                            loop={true}
                            autoPlay={true}
                            controls={true}
                            muted={true}
                        ></video>
                    </div>
                </div>
            </div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="panorama">
                        <div className="panorama_item">
                            <img src={pano1} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano2} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano3} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano4} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano5} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano6} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano7} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano8} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano9} alt="panorama" />
                        </div>
                        <div className="panorama_item">
                            <img src={pano10} alt="panorama" />
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>




            {/* VIRTUAL TOUR DESCRIPTION */}
            <div className="virtual_desc">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>


            {/* FOOTER */}
            <Footer />
        </div>
    )
}