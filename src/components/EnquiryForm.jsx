import { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import { FormContext } from '../context/FormContext.jsx'
import { statesAndCities } from '../data/states.js'
import { courses } from '../data/courses.js'
import { LoadingIcon } from './Icons.jsx'

const EnquiryForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    phone: '',
    state: '',
    email: '',
    otp: '',
    city: '',
    course: '',
    message: '',
    captcha: '',
    captchaInput: '',
    is_otp_verified: 0,
  })
  const { isSubmitted, setIsSubmitted, setShowInstantForm } =
    useContext(FormContext)
  const [cities, setCities] = useState([])
  const [errors, setErrors] = useState({})
  const [generatedOtp, setGeneratedOtp] = useState(' ')
  const [isOtpVerified, setIsOtpVerified] = useState(false)
  const [otpState, setOtpState] = useState('')
  const [seconds, setSeconds] = useState(59)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (formData.state) {
      const selectedState = statesAndCities.find(
        (state) => state.name === formData.state,
      )
      if (selectedState) {
        setCities(selectedState.cities)
        setFormData((prev) => ({ ...prev, city: '' }))
      }
    } else {
      setCities([])
    }
  }, [formData.state])

  function getUtmParams() {
    const params = new URLSearchParams(window.location.search)
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      utm_id: params.get('utm_id') || '',
      fbclid: params.get('fbclid') || params.get('gclid') || '',
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name == 'phone' && isOtpVerified) return
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'email is required'
    if (!formData.course) newErrors.course = 'Select a course'
    if (!formData.fathername.trim()) newErrors.fathername = 'fatername is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }
    if (!formData.state) newErrors.state = 'State is required'
    if (!formData.city) newErrors.city = 'City is required'
    if (formData.is_otp_verified == 0) newErrors.otp = 'Verify otp'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const utmParams = getUtmParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (validate()) {
      const payload = {
        student_name: formData.name,
        father_name: formData.fathername,
        department: formData.course,
        mobile: formData.phone,
        email: formData.email,
        state: `${formData.city},${formData.state}`,
        qualification: '',
        requirement: formData.message,
        degreeID: '',
        course_code_ID: 'arts',
        is_otp_verified: formData.is_otp_verified,
        utm_id: utmParams?.utm_id || '',
        utm_source: utmParams?.utm_source || 'website',
        utm_medium: utmParams?.utm_medium || '',
        utm_campaign: utmParams?.utm_campaign || '',
        utm_content: utmParams?.utm_content || '',
        utm_term: utmParams?.utm_term || '',
        utm_gclid: utmParams?.fbclid || '',
      }
      try {
        let response = await axios.post(
          'https://agribackend.vercel.app/api/submit-form',
          payload,
        )
        setTimeout(() => {
          setIsSubmitted(true)
          setShowInstantForm(false)
          setIsSubmitting(false)
          if (response.data != 1) {
            window.location.href = 'https://apply.smvec.ac.in/'
          } else {
            navigate('/already-enquired')
          }
        }, 100)
      } catch {
        alert('Something went wrong! try after sometimes')
        setIsSubmitting(false)
      }
    } else {
      setIsSubmitting(false)
    }
  }

  const startTimer = () => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          timerRef.current = null
          setOtpState('')
          setSeconds(59)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleGetOtp = async (e) => {
    e.preventDefault()
    setOtpState('otp')
    const newErrors = {}
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      setOtpState('')
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
      setOtpState('')
    } else {
      try {
        const response = await axios.post(
          'https://agribackend.vercel.app/api/send-otp',
          { mobile_number: formData.phone },
        )
        const otp = JSON.stringify(response.data)
        setGeneratedOtp(otp)
        setOtpState('otpcount')
        startTimer()
      } catch (error) {
        console.error('Error submitting form:', error)
        setOtpState('')
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!formData.otp) newErrors.otp = 'Enter a valid otp'
    if (generatedOtp == ' ') newErrors.otp = 'generate a OTP '
    if (generatedOtp !== formData.otp) {
      newErrors.otp = 'Enter a valid otp'
    } else {
      setFormData((prev) => ({ ...prev, is_otp_verified: 1 }))
      setIsOtpVerified(true)
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') e.preventDefault()
  }

  return (
    <div className="form-container">
      <div className="header">
        <h2>Admission enquiry</h2>
      </div>
      <form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div className="names_field">
            <TextField
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              className="custom-input"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <TextField
              id="fathername"
              label="Father Name"
              className="custom-input"
              name="fathername"
              variant="outlined"
              fullWidth
              value={formData.fathername}
              onChange={handleChange}
              error={!!errors.fathername}
              helperText={errors.fathername}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </div>

          <div className="input-with-btn">
            <TextField
              id="phone"
              label="Phone"
              name="phone"
              variant="outlined"
              className="custom-input"
              style={{ width: `${isOtpVerified ? '100%' : 'calc(100% - 120px)'}` }}
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
            {otpState == '' && !isOtpVerified && (
              <button onClick={handleGetOtp}>Get-Otp</button>
            )}
            {otpState == 'otp' && (
              <button>
                <span className="loading-btn">
                  <LoadingIcon />
                </span>
              </button>
            )}
            {otpState == 'otpcount' && !isOtpVerified && (
              <button>{seconds} sec</button>
            )}
          </div>

          {generatedOtp !== ' ' && (
            <>
              {isOtpVerified ? (
                <div className="success-msg">OTP Verified Sucessfully</div>
              ) : (
                <div className="input-with-btn">
                  <TextField
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    label="OTP"
                    variant="outlined"
                    className="custom-input"
                    style={{ width: 'calc(100% - 120px)' }}
                    error={!!errors.otp}
                    helperText={errors.otp}
                    onKeyDown={(e) => handleKeyDown(e)}
                  />
                  <button onClick={handleVerifyOtp}>Verify</button>
                </div>
              )}
            </>
          )}

          <TextField
            id="email"
            label="Email"
            name="email"
            type="email"
            className="custom-input"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <FormControl fullWidth sx={{ mt: 2 }} error={!!errors.course}>
            <InputLabel id="course-label">Program</InputLabel>
            <Select
              labelId="course-label"
              id="course"
              name="course"
              className="custom-input"
              value={formData.course}
              onChange={handleChange}
              label="Program"
            >
              <MenuItem value="">
                <em>Select Program</em>
              </MenuItem>
              {courses.map((course) => (
                <MenuItem value={course.degree_code} key={course.name}>
                  {course.name}
                </MenuItem>
              ))}
            </Select>
            {errors.course && <FormHelperText>{errors.course}</FormHelperText>}
          </FormControl>

          <div className="location_inputs">
            <TextField
              select
              id="state"
              label="State"
              name="state"
              fullWidth
              className="custom-input"
              variant="outlined"
              value={formData.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
            >
              {statesAndCities.map((state) => (
                <MenuItem value={state.name} key={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              id="city"
              label="City"
              name="city"
              fullWidth
              variant="outlined"
              className="custom-input"
              value={formData.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
            >
              {cities.map((city) => (
                <MenuItem value={city} key={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <TextField
            id="message"
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
          />

          {isSubmitting ? (
            <button className="submit-btn">
              <div>
                <span className="loading-btn">
                  <LoadingIcon />
                </span>
              </div>
            </button>
          ) : (
            <button onClick={handleSubmit} className="submit-btn">
              Submit Application
            </button>
          )}
        </Box>
      </form>
    </div>
  )
}

export default EnquiryForm
