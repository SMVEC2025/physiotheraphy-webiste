import EnquiryForm from '../components/EnquiryForm.jsx'
import AboutSection from '../components/AboutSection.jsx'
import BptProgramme from '../components/BptProgramme.jsx'
import CampusFacilities from '../components/CampusFacilities.jsx'

const Admission = () => {
  return (
    <>
      <div className="admission_main">
        <div className="af_main">
          <EnquiryForm />
        </div>
      </div>
      <AboutSection />
      <BptProgramme />
      <CampusFacilities />
    </>
  )
}

export default Admission
