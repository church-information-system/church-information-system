import React from 'react';

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

export default function VirtualTour() {
    return (
        <div>
            {/* HEADER */}
            <Header />
            <div className="page_title mt-5">
                Church Virtual Tour
            </div>

            {/* VIRTUAL TOUR */}
            <div className="tour_img">
                <div className="virtualtour mt-5 mb-5">
                    <iframe src={`https://www.google.com/maps/embed?pb=!4v1627367258818!6m8!1m7!1sCAoSLEFGMVFpcE1OLVQtVGRWM2xWWHRiSHVuSExvcDR6eVhiZmJUcXpTMEhYNTNq!2m2!1d14.01686978068562!2d121.4020784266619!3f200!4f10!5f0.7820865974627469`}
                        width="100%"
                        height="700"
                        display="initial"
                        position="relative" />
                </div>
            </div>

             {/* IMAGES */}

             <div className="img_line1 mlr">
                <div className="images_row">
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
                    {/* <div className="img_item">
                        <img src={img6} alt="virtualphoto"/>
                    </div>
                    <div className="img_item">
                        <img src={img7} alt="virtualphoto"/>
                    </div> */}
                </div>
            </div>


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