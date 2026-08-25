import AnnouncementBar from './AnnouncementBar.jsx'
import Header from './Header.jsx'
import InstantForm from './InstantForm.jsx'
import MobileMenu from './MobileMenu.jsx'
import Footer from './Footer.jsx'

const Layout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <InstantForm />
      <MobileMenu />
      {children}
      <Footer />
    </>
  )
}

export default Layout
