import React from 'react';
import { Link } from 'react-router-dom';

// PAGES
import Header from './layout/header';
import Footer from './layout/footer';
import MassScheduleMain from './massschedule';

// IMAGES
import canonical from './../assets/images/canonical.jpg';
import nsols from './../assets/images/nsols.jpg';
import facebook from './../assets/images/facebook.png';
import gmail from './../assets/images/gmail.png';
import pyf from './../assets/images/pyf.jpg';
import pic3 from './../assets/images/pic3.jpg';
import donateicon from './../assets/images/donateicon.png';



export default function About() {
    return (
        <div>
            {/* NAVBAR HERE */}
            <Header />
            {/* BANNER */}
            <div className="banner_main_about">
                <div className="overlay"></div>
                <div class="about_title">
                    <h2>ABOUT</h2>
                </div>
            </div>
            {/* CONTENTS ABOUT */}
            <div className="row about_content">
                <div className="about_title">
                    Decree
                </div>
                <div className="cont_about">
                    <p>
                        In the exercise of our mandate to foment devotion and nurture the practice of piety among our Catholic faithful; after receiving the petition Of the Bishop of Lucena and the recommendation of the Episcopal Commissions on Liturgy, Canon Law and Doctrine of Faith; with the vote of approval of the Catholic Bishops of the Philippines during its one hundred fourteenth plenary assembly; invoking the spirit of Canon 1231 of the Code of Canon Law; by virtue of the powers vested in me as President of the Catholic Bishops' Conference of the Philippines, we hereby decree with joy that the Church of Our Lady of Sorrows in Dolores, Quezon in the Diocese of Lucena henceforth be called the
                    </p>
                </div>
            </div>
            <div className="row about_content">
                <div className="about_title">
                    NATIONAL SHRINE OF OUR LADY OF SORROWS
                </div>
                <div className="cont_about">
                    <p>
                        We invoke the blessings of Almighty God upon all the faithful who visit this national shrine that they may grow steadily in Christian piety, reach maturity in the Catholic faith and constantly live the mandate of Christian charity. The sacraments, most specially the Eucharist, must be celebrated with utmost devotion according to the liturgical norms of the Church, the sacrament of Reconciliation must be made available daily to the Catholic faithful; the poor and the needy must always receive the best pastoral care from the Catholic community who come to this national shrine; so that in everything God may be glorified.
                    </p>
                    <p>
                        Given at the Catholic Bishops' Conference of the Philippines, Intramuros, Manila, Philippines, this Fifteenth day of June in the year of the Lord Two Thousand and Seventeen.
                    </p>
                </div>
            </div>
            <div className="row about_content prayer_img_div">
                <img src={pic3} alt="birhen" className="prayer_img" />
                <div className="about_title mt-5">
                    Prayers
                </div>
            </div>
            <div className="row about_content mb-5">
                <div className="col-lg-4 col-sm-12">
                    <div className="prayer_subtitle">
                        Prayer to Our Lady of Sorrows
                    </div>
                    <div className="cont_prayer">
                        <p>
                            Our mother of sorrows,<br />
                            with strength from above you stood by the cross,<br />
                            sharing in the sufferings of Jesus,<br />
                            and with tender care<br />
                            you bore Him in your arms, mourning and weeping.<br />
                            We praise you for your faith,<br />
                            which accepted the life God planned for you.<br />
                            We praise you for your hope,<br />
                            which trusted that God would do great things in you.<br />
                            We praise you for your love<br />
                            in bearing with Jesus the sorrows of His passion.<br />
                            Holy Mary,<br />
                            may we follow your example,<br />
                            and stand by all your children<br />
                            who need comfort and love.<br />
                            Mother of God,<br />
                            stand by us in our trials<br />
                            and care for us in our many needs.<br />
                            Pray for us now and at the hour of our death.<br />
                            Amen!
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="prayer_subtitle">
                        Prayer for Vocation
                    </div>
                    <div className="cont_prayer">
                        <p>
                            Saint Therese by your childlike abandonment to God,
                            I beseech you to help me to love and follow Jesus.
                            Through your miraculous intercession obtain for me the grace to imitate your virtues of simplicity and
                            total confidence in the merciful love of God,
                            so that I may be able to give my life wholeheartedly and to respond generously to His call to live,
                            love and serve the Church in the Religious Life.<br />
                            Amen<br />
                            St. Therese of the Infant Jesus, Pray for us!
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="prayer_subtitle">
                        Prayer for Pope Francis
                    </div>
                    <div className="cont_prayer">
                        <p>
                            May the lord preserve him, and give him life, and make him blessed upon the earth, and deliver him not up to the will of his enemies. (Ps 40:3)
                            Our Father, Hail Mary, Glory be
                            O God, Shepherd and Ruler of all Your faithful people, look mercifully upon Your Sewant Francis, whom You have chosen as shepherd to preside over Your Church. Grant him, we beseech You, that by his word and example, he may edify those over whom has charge, so that, together with the flock to him, he may attain everlasting life. Through Christ our lord Amen!
                        </p>
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