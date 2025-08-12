import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section with Cover Image */}
      <section className="about-hero" style={{
        backgroundImage: 'url(/aboutcover.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '80px',
        opacity: 1,
      }}>
        <style>
          {`
            @media (max-width: 768px) {
              .about-hero {
                min-height: 70vh !important;
                padding-top: 60px !important;
              }
              .hero-subtitle {
                line-height: 1.3 !important;
              }
              .hero-subtitle {
                line-height: 1.5 !important;
                display: none !important;
              }
            }
            @media (max-width: 480px) {
              .about-hero {
                min-height: 50vh !important;
                padding-top: 50px !important;
              }
              .hero-subtitle {
                line-height: 1.2 !important;
              }
              .hero-description {
                line-height: 1.4 !important;
                
              }
            }
          `}
        </style>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <div className="container text-center text-white" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 8vw, 4rem)',
            fontWeight: '500',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '2px'
          }}>
            About Us
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            lineHeight: '1.6',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontWeight: '500',
          }}>
            Building Tomorrow's Infrastructure Today
          </p>
          <p className="hero-description" style={{
            fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
            lineHeight: '1.8',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontWeight: '500'
          }}>
            At Husma Engineering, we are dedicated to delivering innovative engineering solutions
            that shape the future of infrastructure and construction.
          </p>
        </div>
      </section>

      {/* Company Information Section - Replaced with Bootstrap About Section */}
      <div className="about-section" style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <style>
          {`
            .section-subtitle {
              color: #6c757d;
              font-size: 14px;
              font-weight: 600;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 20px;
            }
            .section-title {
              font-size: 2.5rem;
              font-weight: 700;
              color: #212121ff;
              line-height: 1.2;
              margin-bottom: 30px;
            }
            .about-text {
              color: #6c757d;
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 20px;
            }
            .experience-box {
              background: #fff;
              border: 3px solid #e67e22;
              padding: 20px;
              text-align: center;
              border-radius: 10px;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            .experience-number {
              font-size: 3rem;
              font-weight: 700;
              color: #e67e22;
              line-height: 1;
              margin-bottom: 10px;
            }
            .experience-text {
              color: #2c3e50;
              font-weight: 600;
              font-size: 16px;
              line-height: 1.2;
            }
            .about-images {
              position: relative;
            }
            .img-1 {
              border-radius: 10px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .img-2 {
              border-radius: 10px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              position: absolute;
              bottom: -50px;
              right: 0;
              border: 5px solid #fff;
            }
            @media (max-width: 768px) {
              .about-images {
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: flex-start;
                flex-direction: row;
              }
              .img-1, .img-2 {
                position: relative !important;
                bottom: 0 !important;
                right: 0 !important;
                width: 48% !important;
                flex-shrink: 0;
                border: 3px solid #fff !important;
              }
              .section-title {
                font-size: 2rem;
                text-align: center;
              }
              .about-text {
                text-align: center;
              }
              .ps-lg-4 {
                padding-left: 0 !important;
                text-align: center;
              }
            }
          `}
        </style>

        <div className="container">
          <div className="row align-items-center">
            {/* Images Column */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="about-images">
                <img src="/about-1.jpg" alt="Modern House Design" className="img-fluid img-1" style={{ width: '60%', height: 'auto' }} />
                <img src="/about-2.jpg" alt="Architectural Detail" className="img-fluid img-2" style={{ width: '60%', height: 'auto' }} />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6 col-md-12">
              <div className="ps-lg-4">

                <h2 className="section-title">
                  Empowering Your Vision with Architectural, Structural, and MEP Design Excellence
                </h2>

                <p className="about-text">
                  Welcome to <strong>HUSMAH ENGINEERING</strong>, your trusted partner in transforming architectural visions into enduring realities.
                </p>

                <p className="about-text">
                  As specialists in Architectural, Structural, and MEP Design and consultancy Services, we stand at the intersection of creativity, precision, and client-centric solutions.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="values-section py-5" style={{
        backgroundColor: '#F8F9FA',

      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#212121ff',
              marginBottom: '1rem'
            }}>
              What We Do?
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#525252',
              margin: '0 auto 2rem'
            }}></div>
          </div>

          <div className="row g-2 justify-content-center" style={{ width: '100%', gap: '0.5rem' }}>
            {/* Design Service */}
            <div className="col-lg-3 col-md-5 col-sm-9" style={{ backgroundColor: '#f5f5f5ff', padding: '20px 20px', borderRadius: '15px', margin: '0 0.25rem', width: '350px', maxWidth: '90%', border: '2px solid #e9ecef' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(/Design.jpg)';
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.style.backgroundPosition = 'center';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.querySelectorAll("*").forEach((el) => {
                  el.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'none';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.querySelectorAll("*").forEach((el) => {
                  el.style.color = "";
                });
                // Reset specific colors for h4 and p elements
                const h4 = e.currentTarget.querySelector("h4");
                const p = e.currentTarget.querySelector("p");
                if (h4) h4.style.color = "#2D2D2D";
                if (p) p.style.color = "#6c757d";
              }}
            >
            <div className="text-center">
              <div className="service-icon" style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Replace with your design icon */}
                <img
                  src="/design.png"
                  alt="Design Icon"
                  style={{
                    width: '60px',
                    height: '60px',
                  }}
                />
              </div>
              <h4 style={{
                color: '#2D2D2D',
                marginBottom: '1.5rem',
                fontWeight: '600',
                fontSize: '1.5rem'
              }}>Design</h4>
              <p style={{
                color: '#6c757d',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                We create innovative architectural, structural, and MEP designs that blend creativity with precision. Our design solutions are tailored to meet your specific needs while ensuring functionality, aesthetics, and sustainability.
              </p>
            </div>
          </div>

          {/* Consultant Service */}
          <div className="col-lg-3 col-md-5 col-sm-9" style={{ backgroundColor: '#f5f5f5ff', padding: '20px 20px', borderRadius: '15px', margin: '0 0.25rem', width: '350px', maxWidth: '90%',border: '2px solid #e9ecef' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(/Consultant.jpg)';
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.style.backgroundPosition = 'center';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.querySelectorAll("*").forEach((el) => {
                  el.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'none';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.querySelectorAll("*").forEach((el) => {
                  el.style.color = "";
                });
                // Reset specific colors for h4 and p elements
                const h4 = e.currentTarget.querySelector("h4");
                const p = e.currentTarget.querySelector("p");
                if (h4) h4.style.color = "#2D2D2D";
                if (p) p.style.color = "#6c757d";
              }}
            >
            <div className="text-center">
              <div className="service-icon" style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Replace with your consultant icon */}
                <img
                  src="/consultant.png"
                  alt="Consultant Icon"
                  style={{
                    width: '60px',
                    height: '60px',
                  }}
                />
              </div>
              <h4 style={{
                color: '#2D2D2D',
                marginBottom: '1.5rem',
                fontWeight: '600',
                fontSize: '1.5rem'
              }}>Consultant</h4>
              <p style={{
                color: '#6c757d',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                Our expert consultancy services provide strategic guidance and technical expertise throughout your project lifecycle. We offer professional advice on engineering solutions, regulatory compliance, and project optimization.
              </p>
            </div>
          </div>

          {/* Construction Service */}
          <div className="col-lg-3 col-md-5 col-sm-9" style={{ backgroundColor: '#f5f5f5ff', padding: '20px 20px', borderRadius: '15px', margin: '0 0.25rem', width: '350px', maxWidth: '90%', border: '2px solid #e9ecef' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(/Construction.jpg)';
                e.currentTarget.style.backgroundSize = 'cover';
                e.currentTarget.style.backgroundPosition = 'center';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.querySelectorAll("*").forEach((el) => {
                  el.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'none';
                e.currentTarget.style.color = '#000000';
                e.currentTarget.querySelectorAll("*").forEach((el) => {
                  el.style.color = "";
                });
                // Reset specific colors for h4 and p elements
                const h4 = e.currentTarget.querySelector("h4");
                const p = e.currentTarget.querySelector("p");
                if (h4) h4.style.color = "#2D2D2D";
                if (p) p.style.color = "#6c757d";
              }}
            >
            <div className="text-center">
              <div className="service-icon" style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Replace with your construction icon */}
                <img
                  src="/construction.png"
                  alt="Construction Icon"
                  style={{
                    width: '60px',
                    height: '60px',
                  }}
                />
              </div>
              <h4 style={{
                color: '#2D2D2D',
                marginBottom: '1.5rem',
                fontWeight: '600',
                fontSize: '1.5rem'
              }}>Construction</h4>
              <p style={{
                color: '#6c757d',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}>
                We manage and execute construction projects with precision and quality assurance. Our construction services ensure your designs come to life with superior craftsmanship, timely delivery, and strict adherence to safety standards.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Our Statistics */}
      <section className="statistics-section" style={{
        backgroundColor: '#F8F9FA',
        padding: '80px 0',
        color: '#2c3e50',
      }}>
        <div className="container">
          <div className="row">
            {/* Left Side - Content */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="statistics-content" style={{ paddingRight: '2rem' }}>
                <div style={{
                  color: '#7c7c7cff',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}>
                  OUR STATISTICS
                </div>
                
                <h2 style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '30px',
                  color: '#212121ff'
                }}>
                  We Turn Ideas Into Reality
                </h2>
                
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#6c757d',
                  marginBottom: '30px'
                }}>
                  With years of experience and countless successful projects, we have established ourselves 
                  as a leading engineering consultancy firm. Our track record speaks for our commitment 
                  to excellence and innovation in every project we undertake.
                </p>
                
                <div className="quality-assurance" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginTop: '20px'
                }}>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>Quality Assurance</h5>
                    <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
                      Every project meets the highest standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Statistics Grid */}
            <div className="col-lg-6 col-md-12">
              <div className="statistics-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px',
                height: '100%'
              }}>
                <style>
                  {`
                    @media (max-width: 768px) {
                      .statistics-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 20px !important;
                        margin-top: 40px;
                      }
                      .stat-item {
                        text-align: center !important;
                        padding: 20px 15px !important;
                      }
                      .stat-number {
                        font-size: 2rem !important;
                      }
                      .stat-number span {
                        font-size: 1.2rem !important;
                      }
                      .stat-label {
                        font-size: 12px !important;
                        line-height: 1.3 !important;
                      }
                      .statistics-content {
                        padding-right: 0 !important;
                        text-align: center;
                      }
                      .quality-assurance {
                        display: none !important;
                      }
                    }
                    @media (max-width: 480px) {
                      .statistics-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 15px !important;
                      }
                      .stat-item {
                        padding: 15px 10px !important;
                      }
                      .stat-number {
                        font-size: 1.5rem !important;
                      }
                      .stat-number span {
                        font-size: 1rem !important;
                      }
                      .stat-label {
                        font-size: 10px !important;
                        line-height: 1.2 !important;
                      }
                      .quality-assurance {
                        display: none !important;
                      }
                    }
                  `}
                </style>

                {/* House Designs Completed */}
                <div className="stat-item" style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: '2px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#d8d8d8ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
                >
                  <div className="stat-number" style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#3498db',
                    lineHeight: '1',
                    marginBottom: '10px'
                  }}>
                    500<span style={{ fontSize: '2rem', color: '#3498db' }}>+</span>
                  </div>
                  <div className="stat-label" style={{
                    color: '#2c3e50',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.4'
                  }}>
                    House Designs<br/>Completed
                  </div>
                </div>

                {/* Construction Projects Completed */}
                <div className="stat-item" style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: '2px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#d8d8d8ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
                >
                  <div className="stat-number" style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#3498db',
                    lineHeight: '1',
                    marginBottom: '10px'
                  }}>
                    40<span style={{ fontSize: '2rem', color: '#3498db' }}>+</span>
                  </div>
                  <div className="stat-label" style={{
                    color: '#2c3e50',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.4'
                  }}>
                    Construction Projects<br/>Completed
                  </div>
                </div>

                {/* Locations */}
                <div className="stat-item" style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: '2px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#d8d8d8ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
                >
                  <div className="stat-number" style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#3498db',
                    lineHeight: '1',
                    marginBottom: '10px'
                  }}>
                    20<span style={{ fontSize: '2rem', color: '#3498db' }}>+</span>
                  </div>
                  <div className="stat-label" style={{
                    color: '#2c3e50',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.4'
                  }}>
                    Locations
                  </div>
                </div>

                {/* Workforce */}
                <div className="stat-item" style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: '2px solid #e9ecef',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                 e.currentTarget.style.borderColor = '#d8d8d8ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
                >
                  <div className="stat-number" style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: '#3498db',
                    lineHeight: '1',
                    marginBottom: '10px'
                  }}>
                    200<span style={{ fontSize: '2rem', color: '#3498db' }}>+</span>
                  </div>
                  <div className="stat-label" style={{
                    color: '#2c3e50',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.4'
                  }}>
                    Workforce
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Client's Say Section */}
      <section className="testimonials-section" style={{
        backgroundColor: '#F8F9FA',
        padding: '80px 0',
      }}>
        <div className="container">
          <div className="text-center mb-5">
            
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#212121ff',
              marginBottom: '1rem'
            }}>
              What Our Client's Say
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#525252',
              margin: '0 auto'
            }}></div>
          </div>

          <div className="row justify-content-center">
            <style>
              {`
                @media (max-width: 768px) {
                  .testimonial-card {
                    margin-bottom: 30px !important;
                  }
                  .client-image {
                    width: 70px !important;
                    height: 70px !important;
                  }
                  .client-name {
                    font-size: 1.1rem !important;
                  }
                  .testimonial-text {
                    font-size: 14px !important;
                    line-height: 1.5 !important;
                  }
                }
              `}
            </style>

            {/* Review 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="testimonial-card" style={{
                backgroundColor: '#f8f9fa',
                padding: '40px 30px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid #e9ecef',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#b7b7b7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
              >
                {/* Client Image */}
                <div style={{ marginBottom: '20px' }}>
                  <img
                    src="/r1.jpg"
                    alt="Sarah Johnson"
                    className="client-image"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto'
                    }}
                  />
                </div>

                {/* Client Name */}
                <h4 className="client-name" style={{
                  color: '#2c3e50',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  Sarah Johnson
                </h4>

                {/* Client Position */}
                <p style={{
                  color: '#6c757d',
                  fontSize: '14px',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Property Developer
                </p>

                {/* Testimonial Message */}
                <p className="testimonial-text" style={{
                  color: '#6c757d',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "Husma Engineering transformed our vision into reality with exceptional architectural design. Their attention to detail and innovative approach exceeded our expectations. Highly recommended!"
                </p>

                {/* 5 Star Rating */}
                <div className="star-rating" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '5px'
                }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{
                      color: '#ffc107',
                      fontSize: '20px'
                    }}>★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="testimonial-card" style={{
                backgroundColor: '#f8f9fa',
                padding: '40px 30px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid #e9ecef',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#b7b7b7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
              >
                {/* Client Image */}
                <div style={{ marginBottom: '20px' }}>
                  <img
                    src="/r2.jpg"
                    alt="Michael Chen"
                    className="client-image"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto'
                    }}
                  />
                </div>

                {/* Client Name */}
                <h4 className="client-name" style={{
                  color: '#2c3e50',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  Michael Chen
                </h4>

                {/* Client Position */}
                <p style={{
                  color: '#6c757d',
                  fontSize: '14px',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Construction Manager
                </p>

                {/* Testimonial Message */}
                <p className="testimonial-text" style={{
                  color: '#6c757d',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "Outstanding structural engineering solutions! The team's expertise in MEP design helped us complete our commercial project on time and within budget. Professional service throughout."
                </p>

                {/* 5 Star Rating */}
                <div className="star-rating" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '5px'
                }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{
                      color: '#ffc107',
                      fontSize: '20px'
                    }}>★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="testimonial-card" style={{
                backgroundColor: '#f8f9fa',
                padding: '40px 30px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid #e9ecef',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#b7b7b7ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
              >
                {/* Client Image */}
                <div style={{ marginBottom: '20px' }}>
                  <img
                    src="/r3.jpg"
                    alt="Emily Rodriguez"
                    className="client-image"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto'
                    }}
                  />
                </div>

                {/* Client Name */}
                <h4 className="client-name" style={{
                  color: '#2c3e50',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '10px'
                }}>
                  Emily Rodriguez
                </h4>

                {/* Client Position */}
                <p style={{
                  color: '#6c757d',
                  fontSize: '14px',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  Homeowner
                </p>

                {/* Testimonial Message */}
                <p className="testimonial-text" style={{
                  color: '#6c757d',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "From consultation to construction, Husma Engineering provided exceptional service. Their creative designs and technical expertise made our dream home a reality. Couldn't be happier!"
                </p>

                {/* 5 Star Rating */}
                <div className="star-rating" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '5px'
                }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{
                      color: '#ffc107',
                      fontSize: '20px'
                    }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;