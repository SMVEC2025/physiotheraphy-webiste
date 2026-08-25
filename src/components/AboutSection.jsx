const AboutSection = () => {
  return (
    <section className="about hs-about pb-115 pos-rel">
      <div className="container">
        <div className="row align-items-center pt-100">
          <div className="col-lg-6">
            <div className="hs-about_left mt-20">
              <div className="about-img wow skewIn">
                <img
                  src="https://arts.smvec.ac.in/assets/img/history/history-thumb-6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="hs-about-right ml-70 mt-20 wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration=".6s"
            >
              <div className="section-title mb-20">
                <span className="sub-title">about us</span>
                <h1 className="title">
                  Committed to Excellence in Physiotherapy Education
                </h1>
                <p className="hs-content mt-25">
                  SMVEC School of Physiotherapy envisions to foster knowledge, skills, attitude
                  and values of the aspiring youth to enable them to become
                  global citizens. To achieve this process, the institution has
                  evolved a flexible integrated academic curriculum designed in
                  accordance with the Outcome Based Education (OBE which is
                  acquired by the learners of a programme under 'Learner Centric'
                  Model.
                </p>
              </div>
              <ul className="xb-item--list list-unstyled">
                <li>Practical Clinical Exposure</li>
                <li>Advanced Lab Facilities</li>
                <li>Community Wellness Focus</li>
              </ul>
              <div className="xb-btn mt-35">
                <a className="thm-btn thm-btn--stroke-black hover-2" href="/about-us">
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
