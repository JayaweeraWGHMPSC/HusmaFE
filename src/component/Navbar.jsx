import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light fixed-top" 
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '0.1rem',
        paddingBottom: '0.4rem',
        minHeight: '5%'
      }}
    >
      <div className="container-fluid" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
        {/* Logo */}
        <Link to="/" className="navbar-brand" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',

          }}>
            <img
              src="/logo.png"
              alt="Husma Engineering Logo"
              width={40}
              height={40}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '6px'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ 
              display: 'none', 
              color: '#3066d9', 
              fontSize: '20px', 
              fontWeight: 'bold' 
            }}>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
            <span style={{ 
              fontSize: '1.9rem', 
              fontWeight: 'bold', 
              color: '#3066d9',
              letterSpacing: '0.5px'
            }}>
              HUSMA
            </span>
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: '500', 
              color: '#808080',
              letterSpacing: '1px'
            }}>
              ENGINEERING
            </span>
          </div>
        </Link>

        {/* Mobile hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{
            border: 'none',
            padding: '0.5rem',
            fontSize: '1.5rem',
            borderRadius: '0.375rem',
            backgroundColor: 'transparent',
            position: 'relative',
            width: '40px',
            height: '40px'
          }}
        >
          {!isOpen ? (
            // Hamburger Icon (3 lines)
            <>
              <span 
                style={{
                  display: 'block',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  margin: '5px auto',
                  transition: '0.3s',
                  borderRadius: '2px'
                }}
              />
              <span 
                style={{
                  display: 'block',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  margin: '5px auto',
                  transition: '0.3s',
                  borderRadius: '2px'
                }}
              />
              <span 
                style={{
                  display: 'block',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  margin: '5px auto',
                  transition: '0.3s',
                  borderRadius: '2px'
                }}
              />
            </>
          ) : (
            // Close Icon (X)
            <div style={{
              position: 'relative',
              width: '25px',
              height: '25px',
              margin: 'auto'
            }}>
              <span 
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  top: '11px',
                  transform: 'rotate(45deg)',
                  transition: '0.3s',
                  borderRadius: '2px'
                }}
              />
              <span 
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  top: '11px',
                  transform: 'rotate(-45deg)',
                  transition: '0.3s',
                  borderRadius: '2px'
                }}
              />
            </div>
          )}
        </button>

        {/* Navigation menu */}
        <div 
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} 
          id="navbarNav"
          style={{
            justifyContent: 'flex-end'
          }}
        >
          <ul 
            className="navbar-nav"
            style={{
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <li className="nav-item">
              <Link 
                to="/"
                className="nav-link"
                onClick={closeNavbar}
                style={{
                  color: '#333',
                  fontWeight: '500',
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  borderRadius: '0.375rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#007bff';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about"
                className="nav-link"
                onClick={closeNavbar}
                style={{
                  color: '#333',
                  fontWeight: '500',
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  borderRadius: '0.375rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#007bff';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/services"
                className="nav-link"
                onClick={closeNavbar}
                style={{
                  color: '#333',
                  fontWeight: '500',
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  borderRadius: '0.375rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#007bff';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects"
                className="nav-link"
                onClick={closeNavbar}
                style={{
                  color: '#333',
                  fontWeight: '500',
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  borderRadius: '0.375rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#007bff';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact"
                className="nav-link"
                onClick={closeNavbar}
                style={{
                  color: '#333',
                  fontWeight: '500',
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  borderRadius: '0.375rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#007bff';
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom styles for mobile responsiveness */}
      <style jsx>{`
        @media (max-width: 991.98px) {
          .navbar {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
          
          .navbar-collapse {
            position: absolute;
            top: 100%;
            right: 0;
            width: 200px;
            background-color: white;
            border-radius: 0.375rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            margin-top: 0.5rem;
            margin-right: 15px;
            z-index: 1000;
            padding: 0.8rem;
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
          }
          
          .navbar-collapse.show {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
          
          .navbar-nav {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.3rem !important;
            width: 100%;
          }
          
          .nav-item {
            width: 100%;
          }
          
          .nav-link {
            padding: 0.6rem 0.8rem !important;
            border-bottom: 1px solid #e9ecef;
            width: 100%;
            border-radius: 0.25rem;
            margin-bottom: 0.2rem;
            font-size: 0.9rem !important;
          }
          
          .nav-item:last-child .nav-link {
            border-bottom: none;
            margin-bottom: 0;
          }
          
          .nav-link:hover {
            background-color: #f8f9fa !important;
          }
        }

        @media (min-width: 992px) {
          .navbar {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .navbar-collapse {
            display: flex !important;
            position: static;
            width: auto;
            background: none;
            box-shadow: none;
            margin: 0;
            padding: 0;
            transform: none;
            opacity: 1;
            visibility: visible;
          }
        }

        @media (max-width: 576px) {
          .navbar {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          
          .navbar-collapse {
            width: 150px;
            margin-right: 8px;
            padding: 0.6rem;
          }
          
          .navbar-brand {
            gap: 6px !important;
          }
          
          .navbar-brand > div:first-child {
            width: 35px !important;
            height: 35px !important;
          }
          
          .navbar-brand div span:first-child {
            font-size: 1rem !important;
          }
          
          .navbar-brand div span:last-child {
            font-size: 0.7rem !important;
          }
          
          .nav-link {
            padding: 0.5rem 0.6rem !important;
            font-size: 0.8rem !important;
          }
        }
        
        /* Smooth transitions */
        .navbar-collapse {
          transition: all 0.3s ease-in-out;
        }
        
        /* Active link styling */
        .nav-link:hover,
        .nav-link:focus {
          color: #007bff !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
