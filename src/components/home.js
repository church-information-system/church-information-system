import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

// PAGES
import Footer from './layout/footer';

// IMAGES
import nsols from './../assets/images/nsols.jpg';
// import footage1 from './../assets/images/footage1.mp4';
import donateicon from './../assets/images/donateicon.png';
import a from './../assets/images/eventchurch/a.jpg';
import b from './../assets/images/eventchurch/b.jpg';
import c from './../assets/images/eventchurch/c.jpg';


export default function Home(props) {
    const {posts} = props;

    const [gallery1, setGallery1] = useState([
        { id: 1, img: a },
        { id: 2, img: b },
        { id: 3, img: c },
    ])
  
    return (
        <div>
            {/* NAVBAR HERE */}
            <header>
                <div className="header mlr">
                    <div className="logo_div">
                        <img src={nsols} alt="logo" className="logo_size" />
                    </div>
                    <div className="navBar">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <Link to="/" className="nav-item">
                                            <a className="nav-link" aria-current="page">HOME</a>
                                        </Link>
                                        <Link to="/about" className="nav-item">
                                            <a className="nav-link">ABOUT US</a>
                                        </Link>
                                        <Link to="/posts" className="nav-item">
                                            <a className="nav-link">POSTS</a>
                                        </Link>
                                        <Link to="/events" className="nav-item">
                                            <a className="nav-link">EVENTS</a>
                                        </Link>
                                        <Link to="/request" className="nav-item">
                                            <a className="nav-link">REQUEST</a>
                                        </Link>
                                        <Link to="/donate" className="nav-item">
                                            <a className="nav-link">DONATE</a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* BANNER */}
            <div className="banner_main">
                <div className="overlay"></div>
                <div className="banner_text">
                    <p>National Shrine of Our Lady of Sorrows</p>
                </div>
                <div className="banner_btn">
                    <Link to="/massschedule">
                        <button type="button" className="mass_sched">
                            Mass Schedule
                        </button>
                    </Link>
                    <Link to="/donate">
                        <button type="button" className="mass_sched">
                            Donate
                        </button>
                    </Link>
                </div>
            </div>

            {/* INTRODUCTION */}
            <div className="intro row margin mt-5 padding">
                <div className="col-lg-6 col-md-6 col-sm-12 bible_verse">
                    <div className="tag_line">Your sorrow will turn into joy</div>
                    <div className="verse">John 16 : 20</div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="cont_title">
                        To <span style={{ color: '#ffcd43', fontWeight: 'bold' }}>National Shrine of Our Lady of Sorrows</span> in Dolores, Quezon Province Philippines
                    </div>
                    <div className="cont_par">
                        <p>Our Lady Of Sorrows Shrine is a church located at Dolores, Quezon.It was declared as a national shrine last 15th day of June 2017.Every sunday, many tourists came to see,pray and devote Birhen Dolorosa which is the patron of OFWs.Known to the devout of Quezon Province and even beyond, the town of Dolores is home to the Shrine of Our Lady of Sorrows and its people are as zealous in keeping their heritage alive with spectacles drawing visitors both near and far.</p>

                        <p>The famous “Pangkuan” is held every Friday of the week. Many people from the neighboring towns come to Dolores to attend the mass in honor of the Birhen Dolorosa. It is also known for the yearly “Viernes de Dolores” which falls either in March or April. It features the holy Mass and a “Turumba”, a dance praising the town’s patron saint.</p>

                        <p>Behind of the church is a tourist spot that depicts the life of Jesus from when it’s born to resurrection. You will also see huge the sculpture of Birhen Dolorosa.</p>

                        <p>Also on the back of the church, there is a place for wishing a peaceful and bless life which you would just buy a candle and pray the given prayer many times and set up right the candle where it should stand.</p>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="row margin mt-5 mb-5 home_content">
                <div className="col-lg-12 col-sm-12 content_vid">
                    <div className="video_div">
                        {/* <video src={footage1} width="1200px" height="700px" className="video" loop={true} autoPlay={true} muted={true}>
                        </video> */}
                    </div>
                    <div className="button_yellow">
                        <Link to="/virtualtour">
                            <button type="button" className="yellow_btn">
                                Chapel Virtual Tour
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row margin">
                 {/* POSTS */}
                <div className="col-lg-8 col-md-8 col-sm-12 posts margin padding">
                    <div className="post_main_head">
                        <h3 className="post_header">Posts</h3>
                    </div>
                    {posts.map((post) => (
                        <div className="card posts_card mb-3" key={post.id}>
                            <div className="card-header flex-space">
                                <div className="post_title">
                                    {post.title}
                                </div>
                                <div className="post_date">
                                    {post.date}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="mb-0">
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="viewAll">
                        <Link to="/posts">
                            <button type="button" className="yellow_btn">
                                View All posts
                            </button>
                        </Link>
                    </div>
                </div>

                {/* ANNOUNCEMENTS */}
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3>Events</h3>
                    <div className="events">
                        {gallery1.map((gal) => (
                           <div className="image_gallery" key={gal.id}>
                           <a href={gal.img}>
                               <div className="image">
                                   <img src={gal.img} className="img-fluid rounded image__img" />
                                   <div className="image__overlay image__overlay">
                                       <div className="zoomin">
                                           <FaSearch className="search_bg" />
                                       </div>
                                   </div>
                               </div>
                           </a>
                       </div>
                        ))}
                         <div className="viewAll">
                        <Link to="/events">
                            <button type="button" className="yellow_btn">
                                View More
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
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