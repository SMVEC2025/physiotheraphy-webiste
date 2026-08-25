import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { bosDocs, regulationDocs, statutoryDocs } from '../data/academics.js'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState('')
  const [openSubmenu, setOpenSubmenu] = useState('')

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setOpenSection('')
    setOpenSubmenu('')
  }

  const toggleSection = (e, key) => {
    e.preventDefault()
    setOpenSection((current) => (current === key ? '' : key))
    setOpenSubmenu('')
  }

  const toggleSubmenu = (e, key) => {
    e.preventDefault()
    setOpenSubmenu((current) => (current === key ? '' : key))
  }

  return (
    <div className="mobileMenu">
      <div className="mobileMenu__icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`mobileMenu__drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobileMenu__close" onClick={closeMenu}>
          ×
        </div>
        <ul className="mobileMenu__links">
          <li>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="mm-section-toggle"
              onClick={(e) => toggleSection(e, 'statutory')}
            >
              Approvals{' '}
              <span
                className={`mm-caret ${
                  openSection === 'statutory' ? 'open' : ''
                }`}
              >
                <FiChevronDown />
              </span>
            </a>
            {openSection === 'statutory' && (
              <ul className="mm-sublist">
                {statutoryDocs.map((doc) => (
                  <li key={doc.label}>
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              href="#!"
              className="mm-section-toggle"
              onClick={(e) => toggleSection(e, 'academics')}
            >
              Academics{' '}
              <span
                className={`mm-caret ${
                  openSection === 'academics' ? 'open' : ''
                }`}
              >
                <FiChevronDown />
              </span>
            </a>
            {openSection === 'academics' && (
              <ul className="mm-sublist">
                <li>
                  <a
                    href="#!"
                    className="mm-section-toggle"
                    onClick={(e) => toggleSubmenu(e, 'bos')}
                  >
                    BoS{' '}
                    <span
                      className={`mm-caret ${openSubmenu === 'bos' ? 'open' : ''}`}
                    >
                      <FiChevronDown />
                    </span>
                  </a>
                  {openSubmenu === 'bos' && (
                    <ul className="mm-sublist">
                      {bosDocs.map((doc) => (
                        <li key={doc.label}>
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                          >
                            {doc.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#!"
                    className="mm-section-toggle"
                    onClick={(e) => toggleSubmenu(e, 'programme')}
                  >
                    Programme{' '}
                    <span
                      className={`mm-caret ${
                        openSubmenu === 'programme' ? 'open' : ''
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </a>
                  {openSubmenu === 'programme' && (
                    <ul className="mm-sublist">
                      <li>
                        <a href="/programee/bpt" onClick={closeMenu}>
                          BPT
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#!"
                    className="mm-section-toggle"
                    onClick={(e) => toggleSubmenu(e, 'regulation')}
                  >
                    Regulation{' '}
                    <span
                      className={`mm-caret ${
                        openSubmenu === 'regulation' ? 'open' : ''
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </a>
                  {openSubmenu === 'regulation' && (
                    <ul className="mm-sublist">
                      {regulationDocs.map((doc) => (
                        <li key={doc.label}>
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                          >
                            {doc.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/about-us" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li>
            <a
              href="/assets/doc/faculty-list.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Faculty
            </a>
          </li>
          <li>
            <a href="/admission" onClick={closeMenu}>
              Admission
            </a>
          </li>
        </ul>
      </div>

      {isOpen && <div className="mobileMenu__overlay" onClick={closeMenu}></div>}
    </div>
  )
}

export default MobileMenu
