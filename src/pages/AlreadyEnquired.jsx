import { useNavigate } from 'react-router-dom'
import SmvecAnimatedLogo from '../components/SmvecAnimatedLogo.jsx'

const AlreadyEnquired = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="success-container">
        <SmvecAnimatedLogo />
        <h1 className="thankyou-text">You've Already Enquired</h1>
        <p className="sub-text">
          Our team has received your enquiry and will get in touch with you
          shortly.
        </p>
        <p className="sub-text">
          If you have any urgent questions, feel free to contact our admissions
          office.
        </p>
        <button onClick={() => navigate('/')} className="sub-button">
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default AlreadyEnquired
