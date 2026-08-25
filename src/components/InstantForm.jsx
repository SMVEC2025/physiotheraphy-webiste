import { useContext } from 'react'
import { FormContext } from '../context/FormContext.jsx'
import EnquiryForm from './EnquiryForm.jsx'

const InstantForm = () => {
  const { showInstantForm, setShowInstantForm } = useContext(FormContext)

  const handleOverlayClick = (e) => {
    if (e.target.id === 'popupOverlay') setShowInstantForm(false)
  }

  return (
    <>
      {showInstantForm && (
        <div
          id="popupOverlay"
          onClick={handleOverlayClick}
          className="instantform_main"
        >
          <div className="if_container">
            <EnquiryForm />
          </div>
        </div>
      )}
    </>
  )
}

export default InstantForm
