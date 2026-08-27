const MissionVision = () => {
  return (
    <section className="mission-vission z-1 pos-rel pt-110">
      <div
        className="mission-vission-bg"
        data-background="assets/img/bg/vm_bg.jpg"
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-65">
              <h2 className="title mb-15">our vision and mission</h2>
              <p>
                SMVEC School of Physiotherapy is dedicated to advancing the
                science and art of physiotherapy through quality education,
                research, and compassionate care. We strive to nurture skilled,
                ethical, and innovative healthcare professionals who promote
                wellness, restore function, and improve the quality of life in
                individuals and communities.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-none-30 mission-vission-row">
          <div className="col-lg-6 mt-30">
            <div className="mission-vission-item">
              <h3 className="xb-item--title">Our Vision</h3>
              <p className="xb-item--content">
                To be a globally recognized centre of excellence in physiotherapy
                education, research, and clinical practice, dedicated to
                transforming lives and advancing healthcare to serve society.
              </p>
              <div className="xb-item--shape">
                <div className="shape shape--1">
                  <img src="assets/img/shape/vm_shape1.png" alt="" />
                </div>
                <div className="shape shape--2">
                  <img src="assets/img/shape/vm_shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
            <div className="mission-vission-item">
              <h3 className="xb-item--title">Our Mission</h3>
              <ul className="xb-item--list list-unstyled">
                <li>
                  <span>
                    <img src="assets/img/icon/check.svg" alt="" />
                  </span>
                  <strong>M1 – Quality Education:</strong> To Provide a dynamic
                  and inclusive learning environment that integrates cutting-edge
                  technologies and evidence-based practices to develop proficient
                  physiotherapy professionals.
                </li>
                <li>
                  <span>
                    <img src="assets/img/icon/check.svg" alt="" />
                  </span>
                  <strong>M2 – Research and Innovation:</strong> To Encourage
                  collaborative research initiatives and innovative solutions in
                  partnership with global healthcare institutions to address
                  emerging health challenges.
                </li>
                <li>
                  <span>
                    <img src="assets/img/icon/check.svg" alt="" />
                  </span>
                  <strong>M3 – Employability and Entrepreneurship:</strong> To
                  Equip students with the necessary skills and ethical values to
                  excel in diverse healthcare settings and promote entrepreneurial
                  endeavours.
                </li>
                <li>
                  <span>
                    <img src="assets/img/icon/check.svg" alt="" />
                  </span>
                  <strong>M4 – Ethical Values:</strong> To Instil a deep sense of
                  social responsibility, encouraging graduates to contribute
                  positively to community health and well-being.
                </li>
              </ul>
              <div className="xb-item--shape">
                <div className="shape shape--1">
                  <img src="assets/img/shape/vm_shape1.png" alt="" />
                </div>
                <div className="shape shape--2">
                  <img src="assets/img/shape/vm_shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
