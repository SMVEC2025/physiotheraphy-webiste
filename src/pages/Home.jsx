import Hero from '../components/Hero.jsx'
import HomeEnquiry from '../components/HomeEnquiry.jsx'
import AboutSection from '../components/AboutSection.jsx'
import MissionVision from '../components/MissionVision.jsx'
import BptProgramme from '../components/BptProgramme.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Infrastructure from '../components/Infrastructure.jsx'
import CampusFacilities from '../components/CampusFacilities.jsx'

const Home = () => {
  return (
    <div>
      <div className="body_wrap">
        <Hero />
        <HomeEnquiry />
        <AboutSection />
        <MissionVision />
        <BptProgramme showbutton={true} />
        <WhyChoose />
        <Infrastructure />
        <CampusFacilities />
      </div>
    </div>
  )
}

export default Home
