import Breadcrumb from '../components/Breadcrumb.jsx'
import MissionVision from '../components/MissionVision.jsx'

const AboutUs = () => {
  return (
    <div className="body_wrap">
      <main>
        <Breadcrumb title="About us" />
        <section className="about pt-80 ">
          <div className="container">
            <div className="about-content mt-60">
              SMVEC School of Physiotherapy is dedicated to advancing the science and art of
              physiotherapy through quality education, research, and
              compassionate care. We strive to nurture skilled, ethical, and
              innovative healthcare professionals who promote wellness, restore
              function, and improve the quality of life in individuals and
              communities.
            </div>
            <div className="xb-video pos-rel mt-115">
              <img src="/assets/img/bg/back.webp" alt="" />
            </div>
          </div>
        </section>
        <section className="about dean-message pt-110">
          <div className="container">
            <div className="row align-items-center mt-none-30">
              <div className="col-xl-4 col-lg-5 mt-30">
                <div className="about-image dean-message__photo">
                  <img
                    src="/assets/img/dean/dean-physio.jpg"
                    alt="Dr K Vivek MPT PhD, Dean I/c, SMVEC School of Physiotherapy"
                  />
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 mt-30">
                <div className="about-content">
                  <div className="section-title mb-20">
                    <h2 className="title">Our Dean's Message</h2>
                  </div>
                  <p>Welcome to SMVEC-School of Physiotherapy.</p>
                  <p>
                    Physiotherapy is a vital cornerstone of modern healthcare,
                    blending scientific research, clinical expertise, and
                    compassionate care to restore movement, enhance functional
                    independence, and improve human life. At our institution, we
                    are committed to nurturing competent, ethical, and empathetic
                    healthcare professionals equipped to meet the evolving global
                    standards of rehabilitation medicine.
                  </p>
                  <p>
                    Our curriculum emphasizes outcome-based education,
                    integrating rigorous academic foundation with early clinical
                    exposure. State-of-the-art anatomy and biomechanics
                    laboratories, modern electrotherapy and exercise therapy
                    units, and hands-on training across multidisciplinary
                    hospital settings ensure that our students develop
                    exceptional diagnostic and therapeutic skills.
                  </p>
                  <p>
                    Beyond clinical excellence, we foster a strong culture of
                    research, innovation, and community health engagement. Our
                    dedicated faculty members serve not only as educators but
                    also as active clinicians and mentors, guiding students
                    through evidence-based practice, medical ethics, and holistic
                    patient management.
                  </p>
                  <p>
                    Whether you are aspiring to begin your journey in physical
                    rehabilitation or looking to advance your clinical expertise,
                    SMVEC-School of Physiotherapy offers a transformative
                    environment designed to help you excel. I invite you to
                    explore our vibrant academic community and join us in shaping
                    the future of healthcare through movement and recovery.
                  </p>
                  <div className="dean-message__signature">
                    <h4>Dr K Vivek MPT PhD</h4>
                    <span>Dean I/c</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MissionVision />
        <section className="about pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center mt-none-30">
              <div className="col-xl-6 col-lg-5 mt-30">
                <div className="about-image">
                  <img src="/assets/img/bg/students.webp" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 mt-30">
                <div className="about-content">
                  <div className="section-title ">
                    <span className="sub-title">why us better</span>
                    <h2 className="title">
                      why SMVEC School of <br /> Physiotherapy?{' '}
                    </h2>
                  </div>
                  <p>
                    SMVEC School of Physiotherapy stands
                    distinguished through its outcome-based education that
                    fosters innovation and research, supported by world-class
                    infrastructure featuring smart classrooms, advanced
                    laboratories, and modern learning environments. Guided by
                    highly qualified faculty and industry professionals, students
                    receive strong career support through an excellent placement
                    ecosystem and continuous skill development programs. The
                    institution nurtures holistic growth by emphasizing ethics,
                    leadership, and community engagement, while also offering
                    global exposure through collaborations with reputed
                    institutions and international initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutUs
