const BptProgramme = ({ showbutton }) => {
  return (
    <section className="bpt-programme" id="bpt">
      <div className="section-title text-center mb-25">
        <span className="sub-title">Our Programme</span>
        <h1 className="title">Undergraduate Programme</h1>
      </div>
      <div className="bpt-programme__container">
        <div className="bpt-programme__content">
          <h2 className="bpt-programme__title">
            Bachelor of Physiotherapy (BPT)
          </h2>
          <p className="bpt-programme__intro">
            The Bachelor of Physiotherapy (BPT) programme at SMVEC School of
            Physiotherapy is dedicated to cultivating skilled
            healthcare professionals with strong academic and clinical
            competence. The course integrates theoretical knowledge with
            practical exposure to promote recovery, mobility, and wellness in
            patients.
          </p>
          <div className="bpt-programme__details">
            <div className="bpt-programme__detail">
              <h3 className="bpt-programme__detail-title">Duration</h3>
              <p className="bpt-programme__detail-text">
                4 Years + 1 Year Internship
              </p>
            </div>
            <div className="bpt-programme__detail">
              <h3 className="bpt-programme__detail-title">
                Eligibility for Admission
              </h3>
              <ul className="bpt-programme__detail-list">
                <li className="bpt-programme__detail-text">
                  Completed a minimum of 17 years of age as on 31st December of
                  the year of admission.
                </li>
                <li className="bpt-programme__detail-text">
                  Candidates must have passed the higher secondary examination
                  (academics) with a minimum of 50% marks (40% for reserved
                  categories) in Physics, Chemistry, Biology/Botany &amp;
                  Zoology and English. They must have also passed all subjects
                  individually.
                </li>
              </ul>
            </div>
          </div>
          {showbutton && (
            <a href="/programee/bpt" className="thm-btn thm-btn--stroke-black hover-2">
              View More
            </a>
          )}
        </div>
        <div className="bpt-programme__visual">
          <img
            src="/assets/img/bg/image.jpg"
            alt="Physiotherapy illustration"
            className="bpt-programme__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default BptProgramme
