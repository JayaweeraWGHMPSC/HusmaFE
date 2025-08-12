import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#181818',
      padding: '60px 0 30px',
      color: '#ffffff',
      borderTop: '1px solid #333333'
    }}>
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
            <div style={{ paddingRight: '2rem' }}>
              {/* Logo and Company Name */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                gap: '15px'
              }}>
                <img 
                  src="/logo.png" 
                  alt="Husma Engineering Logo"
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain'
                  }}
                />
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  margin: '0'
                }}>
                  Husma Engineering
                </h3>
              </div>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.7',
                color: '#cccccc',
                marginBottom: '0'
              }}>
                Ready to embark on the journey to your dream home? 
                Explore our portfolio of house designs to find inspiration 
                for your own project, or contact us today to schedule a 
                consultation with our team of experts. Let us help you 
                redefine luxury, comfort, and style with a home plan that 
                is uniquely yours.
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mb-lg-0">
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '20px'
            }}>
              Useful Links
            </h5>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="/" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/about" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/services" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                  Packages
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/contact" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/privacy" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                 Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-lg-3 col-md-3 col-sm-6 mb-4 mb-lg-0">
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '20px'
            }}>
              Contact Us
            </h5>
            <div style={{ fontSize: '14px', lineHeight: '1.7' }}>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#ffffff' }}>Address:</strong><br />
                <span style={{ color: '#cccccc' }}>
                  303/2, R A De Mel Mawatha,<br />
                  Colombo 03
                </span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ color: '#ffffff' }}>Email:</strong><br />
                <a href="mailto:husmaengineering@gmail.com" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                  husmaengineering@gmail.com
                </a>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Phone:</strong><br />
                <a href="tel:+94778892892" style={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e67e22'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                >
                  +94 778 892 892
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '20px'
            }}>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                color: '#000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#000000';
              }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#cccccc',
              lineHeight: '1.6',
              margin: '0'
            }}>
              Follow us on social media and get the latest promotions and updates
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{
          borderTop: '1px solid #333333',
          marginTop: '40px',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#cccccc',
            margin: '0'
          }}>
            Copyright © 2025 - Husma Engineering Pvt Ltd
          </p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .footer-brand {
              padding-right: 0 !important;
              text-align: center;
              margin-bottom: 30px;
            }
            .footer-section {
              text-align: center;
              margin-bottom: 30px;
            }
            .footer-social {
              justify-content: center;
            }
          }
          @media (max-width: 576px) {
            .footer-social {
              flex-wrap: wrap;
              justify-content: center;
              gap: 10px;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;