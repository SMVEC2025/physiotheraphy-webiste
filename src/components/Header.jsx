import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { bosDocs, regulationDocs, statutoryDocs } from '../data/academics.js'
import './navbar-dropdown.css'

const Header = () => {
  const [openMenu, setOpenMenu] = useState('')
  const [openSubmenu, setOpenSubmenu] = useState('')
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu('')
        setOpenSubmenu('')
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleMenu = (e, key) => {
    e.preventDefault()
    setOpenMenu((current) => (current === key ? '' : key))
    setOpenSubmenu('')
  }

  const toggleSubmenu = (e, key) => {
    e.preventDefault()
    setOpenSubmenu((current) => (current === key ? '' : key))
  }

  const closeMenus = () => {
    setOpenMenu('')
    setOpenSubmenu('')
  }

  return (
    <header id="xb-header-area" className="header-area is-sticky">
      <div className="header-top_wrap">
        <div className="container">
          <div className="header-top ul_li_between">
            <div className="xb-help_desk">
              <img
                src="/assets/smvec-logo-with-approval-3.png"
                alt="SMVEC School of Physiotherapy"
              />
            </div>
            <div className="xb-info">
              <ul className="ul_li align-items-center" ref={navRef}>
                <li></li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="nav-has-dropdown">
                  <a href="#!" onClick={(e) => toggleMenu(e, 'statutory')}>
                    Approvals
                    <span
                      className={`nav-caret ${
                        openMenu === 'statutory' ? 'open' : ''
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </a>
                  {openMenu === 'statutory' && (
                    <ul className="nav-dropdown">
                      {statutoryDocs.map((doc) => (
                        <li key={doc.label}>
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenus}
                          >
                            {doc.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="nav-has-dropdown">
                  <a href="#!" onClick={(e) => toggleMenu(e, 'academics')}>
                    Academics
                    <span
                      className={`nav-caret ${
                        openMenu === 'academics' ? 'open' : ''
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </a>
                  {openMenu === 'academics' && (
                    <ul className="nav-dropdown">
                      <li>
                        <a href="#!" onClick={(e) => toggleSubmenu(e, 'bos')}>
                          BoS{' '}
                          <span className="nav-submenu-caret">
                            <FiChevronRight />
                          </span>
                        </a>
                        {openSubmenu === 'bos' && (
                          <ul className="nav-submenu">
                            {bosDocs.map((doc) => (
                              <li key={doc.label}>
                                <a
                                  href={doc.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMenus}
                                >
                                  {doc.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li>
                        <a href="#!" onClick={(e) => toggleSubmenu(e, 'programme')}>
                          Programme{' '}
                          <span className="nav-submenu-caret">
                            <FiChevronRight />
                          </span>
                        </a>
                        {openSubmenu === 'programme' && (
                          <ul className="nav-submenu">
                            <li>
                              <a href="/programee/bpt" onClick={closeMenus}>
                                BPT
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <a
                          href="#!"
                          onClick={(e) => toggleSubmenu(e, 'regulation')}
                        >
                          Regulation{' '}
                          <span className="nav-submenu-caret">
                            <FiChevronRight />
                          </span>
                        </a>
                        {openSubmenu === 'regulation' && (
                          <ul className="nav-submenu">
                            {regulationDocs.map((doc) => (
                              <li key={doc.label}>
                                <a
                                  href={doc.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMenus}
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
                  <a href="/about-us">About us</a>
                </li>
                <li>
                  <a
                    href="/assets/doc/faculty-list.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a href="/admission">Admission</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
