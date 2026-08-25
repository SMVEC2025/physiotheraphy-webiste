import { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [showInstantForm, setShowInstantForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <FormContext.Provider
      value={{
        showInstantForm,
        setShowInstantForm,
        isLoading,
        setIsLoading,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
