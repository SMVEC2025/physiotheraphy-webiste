import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SmvecAnimatedLogo from '../components/SmvecAnimatedLogo.jsx'

const Success = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const studentName = location.state
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (studentName) {
      setIsValid(true)
    } else {
      navigate('/')
    }
  }, [studentName, navigate])

  if (!isValid) return null

  return (
    <>
      <div className="success-container">
        <SmvecAnimatedLogo />
        <h1 className="thankyou-text">Enquired successfully! {studentName}</h1>
        <p className="sub-text">
          You have successfully enquired. We will contact you soon.
        </p>
        <p className="sub-text">
          If you have any urgent questions, feel free to contact our admissions
          office.
        </p>
        <button onClick={() => navigate('/')} className="sub-button">
          Back to Home
        </button>
      </div>
    </>
  )
}

export default Success
