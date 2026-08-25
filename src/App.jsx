import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormProvider } from './context/FormContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Faculty from './pages/Faculty.jsx'
import Admission from './pages/Admission.jsx'
import Success from './pages/Success.jsx'
import AlreadyEnquired from './pages/AlreadyEnquired.jsx'
import Bpt from './pages/Bpt.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/success" element={<Success />} />
              <Route path="/already-enquired" element={<AlreadyEnquired />} />
              <Route path="/programee/bpt" element={<Bpt />} />
            </Routes>
          </Layout>
        </FormProvider>
      </BrowserRouter>
    </>
  )
}

export default App
