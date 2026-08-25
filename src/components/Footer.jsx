import {
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
  FacebookIcon,
  TwitterXIcon,
} from './Icons.jsx'

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-style-three bg_img pos-rel">
        <div className="xb-footer-wrap">
          <div className="xb-footer-main hs-footer-main">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                  <div className="footer-widget mt-10">
                    <div className="xb-item--logo mb-30">
                      <a href="#!">
                        <img
                          src="/assets/smvec-logo-with-approval-3.png"
                          alt="SMVEC - Sri Manakula Vinayagar Engineering College"
                          style={{
                            background: '#fff',
                            padding: '8px',
                            borderRadius: '6px',
                            maxWidth: '100%',
                          }}
                        />
                      </a>
                    </div>
                    <span className="xb-item--details">
                      Sri Manakula Vinayagar Engineering College, Madagadipet,
                      Mannadipet Commune, Puducherry - 605 107
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 mt-30">
                  <div className="footer-widget">
                    <h3 className="xb-item--title">Admissions</h3>
                    <ul className="xb-item--links list-unstyled">
                      <li>
                        <a href="/admission">Apply</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 mt-30">
                  <div className="footer-widget chng-mr">
                    <h3 className="xb-item--title">Quick Links</h3>
                    <ul className="xb-item--links list-unstyled">
                      <li>
                        <a href="#!">Faculty</a>
                      </li>
                      <li>
                        <a href="#!">About us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                  <div className="footer-widget change-mr">
                    <h3 className="xb-item--title">Additional Links</h3>
                    <ul className="xb-item--links list-unstyled">
                      <li>
                        <a href="#!">SMVEC</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hs-footer-contact mt-90 ul_li_between">
                <ul className="xb-item--social_link ul_li mt-20">
                  <li>
                    <a href="https://www.instagram.com/smvec_official/?igsh=MXJmNmY5cmVueHJh">
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=919344916320&text&app_absent=0">
                      <WhatsappIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@official_smvec">
                      <YoutubeIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/SMVECOfficial">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/SMVEC2">
                      <TwitterXIcon />
                    </a>
                  </li>
                </ul>
                <ul className="xb-item--contact list-unstyled mt-20">
                  <li>
                    <span className="xb-item--text">Contact Us</span>
                    <h3 className="xb-item--number">
                      (0413)- 2641151 / 2640823 / 2642000
                    </h3>
                  </li>
                </ul>
                <ul className="xb-item--contact list-unstyled mt-20">
                  <li>
                    <span className="xb-item--text">Email Us</span>
                    <h3 className="xb-item--number">smvec@smvec.ac.in</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom pb-35 pt-35">
            <div className="copyright text-center">
              <p>
                Copyright © 2026{' '}
                <a target="_blank" href="https://smvec.ac.in/">
                  SMVEC
                </a>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="hs-footer-shape">
          <div className="shape shape--two">
            <img src="/assets/img/shape/angle-shape02.png" alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
