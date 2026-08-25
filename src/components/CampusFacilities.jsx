import {
  HostelIcon,
  CanteenIcon,
  TransportIcon,
  SportsIcon,
  RadioIcon,
  FitnessIcon,
} from './Icons.jsx'

const CampusFacilities = () => {
  const facilities = [
    {
      icon: <HostelIcon />,
      title: 'Hostel',
      description: 'Separate boys and girls hostel with well-furnished suite',
    },
    {
      icon: <CanteenIcon />,
      title: 'Canteen',
      description: 'Hygienic veg. and Non-veg. Canteen with excellent quality',
    },
    {
      icon: <TransportIcon />,
      title: 'Transport',
      description: 'Transport – 53 Buses covering various locations',
    },
    {
      icon: <SportsIcon />,
      title: 'Sports',
      description: 'Sports – Indoor and outdoor games are available',
    },
    {
      icon: <RadioIcon />,
      title: 'Nila FM 90.4 MHz',
      description: 'Nila FM 90.4 MHz – covers around 40 places',
    },
    {
      icon: <FitnessIcon />,
      title: 'Fitness',
      description: 'Fitness Center with preloaded dumbbells, steel plates etc.',
    },
  ]

  return (
    <div className="cf-campus-facilities-container">
      <div className="section-title text-center mb-25">
        <span className="sub-title">Our campus</span>
        <h1 className="title">Campus Facilities</h1>
      </div>
      <div className="cf-facilities-section">
        <div className="container">
          <div className="row g-4">
            {facilities.map((facility, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="cf-facility-card">
                  <div className="cf-accent-line"></div>
                  <div className="cf-icon-container">
                    <span className="cf-icon">{facility.icon}</span>
                  </div>
                  <h5 className="cf-card-title">{facility.title}</h5>
                  <p className="cf-card-description">{facility.description}</p>
                  <div className="cf-arrow-indicator">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusFacilities
