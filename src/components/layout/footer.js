import React from 'react';

import facebook from './../../assets/images/facebook.png';
import gmail from './../../assets/images/gmail.png';
import nsols from './../../assets/images/nsols.jpg';
import pyf from './../../assets/images/pyf.png';

export default function Footer () {
    return (
          <footer>
          <div className="footer_logo">
              <img src={nsols} alt="logo"/>
              <img src={pyf} alt="logo"/>
          </div>
          <div className="social_meds">
              <ul>
                  <li>
                      <img src={facebook} alt="facebook" />
                  </li>
                  <li>
                      <img src={gmail} alt="gmail"/>
                  </li>
              </ul>
          </div>
          <div className="copyright">
              Copyright - All rights reserved 2021
          </div>
      </footer>
    )
}