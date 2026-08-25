import Breadcrumb from '../components/Breadcrumb.jsx'

const Faculty = () => {
  const facultyList = [
    {
      name: 'Dr. T. S. Muthukumar',
      desig: 'Prof. Dean – IC - AHS',
      image: '/assets/img/physio_faculty/muthukumar.jpg',
    },
    {
      name: 'Dr. K. Vivek',
      desig: 'Prof. Dean – IC - BPT',
      image: '/assets/img/physio_faculty/vivek.jpg',
    },
    {
      name: 'Dr. V. Velkumar',
      desig: 'Asso. Prof',
      image: '/assets/img/physio_faculty/velkumar.jpg',
    },
    {
      name: 'Dr. R. Murali',
      desig: 'Asstistant Proffesor',
      image: '/assets/img/physio_faculty/murali.jpg',
    },
    {
      name: 'Dr. S. Latha',
      desig: 'Asstistant Proffesor',
      image: '/assets/img/physio_faculty/latha.jpg',
    },
    {
      name: 'Dr. C. Joseph Rechandh',
      desig: 'Asstistant Proffesor',
      image: '/assets/img/physio_faculty/joseph.jpg',
    },
    {
      name: 'Dr. S. Jayasri',
      desig: 'Asstistant Proffesor',
      image: '/assets/img/physio_faculty/jayasri.jpg',
    },
    {
      name: 'Dr. S. Sayeeswari',
      desig: 'Asstistant Proffesor',
      image: '/assets/img/physio_faculty/sayeeswari.jpg',
    },
    {
      name: 'Dr. S. Priyanka',
      desig: 'Asstistant Proffesor',
      image: '/assets/img/physio_faculty/priyanka.jpg',
    },
  ]

  return (
    <div>
      <main>
        <Breadcrumb title="our Faculty" />
        <section className="team pt-120 pb-120" data-bg-color="#F1F1E9">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="sub-title">our honorable Faculty </span>
              <h2 className="title">Our Expert Instructor</h2>
            </div>
            <div className="row mt-none-30">
              {facultyList.map((member, index) => (
                <div className="col-lg-4 col-md-6 mt-30" key={index}>
                  <div className="team-item">
                    <div className="xb-item--img pos-rel">
                      <img src={member.image} alt="" />
                    </div>
                    <div className="xb-item--info ">
                      <h3 className="xb-item--name">{member.name}</h3>
                      <span className="xb-item--desig">{member.desig}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Faculty
