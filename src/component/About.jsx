import React from 'react';
import Navbar from './Navbar';

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
        opacity: 1, // Account for fixed navbar
      }}>
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
            fontSize: '4rem',
            fontWeight: '500',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            letterSpacing: '2px'
          }}>
            About Us
          </h1>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontWeight: '500',
          }}>
            Building Tomorrow's Infrastructure Today
          </p>
          <p style={{
            fontSize: '1.2rem',
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
              color: #2c3e50;
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
              .img-2 {
                position: relative;
                bottom: 0;
                margin-top: 20px;
              }
              .section-title {
                font-size: 2rem;
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
        backgroundColor: '#ffffff',

      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#525252',
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
            <div className="col-lg-3 col-md-5 col-sm-9" style={{ backgroundColor: '#f5f5f5ff', padding: '20px 20px', borderRadius: '15px', margin: '0 0.25rem', width: '350px', maxWidth: '90%' }}
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
              <div style={{
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
          <div className="col-lg-3 col-md-5 col-sm-9" style={{ backgroundColor: '#f5f5f5ff', padding: '20px 20px', borderRadius: '15px', margin: '0 0.25rem', width: '350px', maxWidth: '90%' }}
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
              <div style={{
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
          <div className="col-lg-3 col-md-5 col-sm-9" style={{ backgroundColor: '#f5f5f5ff', padding: '20px 20px', borderRadius: '15px', margin: '0 0.25rem', width: '350px', maxWidth: '90%' }}
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
              <div style={{
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

      {/* Team Section */}
      <section className="team-section py-5" style={{
        backgroundColor: '#f8f9fa'
      }}>
        <div className="container">
    <div className="text-center mb-5">
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#3066d9',
        marginBottom: '1rem'
      }}>
        Why Choose Us
      </h2>
      <div style={{
        width: '80px',
        height: '3px',
        backgroundColor: '#3066d9',
        margin: '0 auto 2rem'
      }}></div>
      <p style={{
        fontSize: '1.1rem',
        color: '#6c757d',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        With decades of combined experience and a passion for excellence,
        we bring expertise and dedication to every project.
      </p>
    </div>

    <div className="row g-4">
      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center p-4">
            <div style={{
              fontSize: '3rem',
              color: '#3066d9',
              marginBottom: '1rem'
            }}>
              🏗️
            </div>
            <h5 style={{ color: '#3066d9', marginBottom: '1rem' }}>
              Expert Engineering
            </h5>
            <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
              Our team of certified engineers brings decades of experience
              in structural, civil, and infrastructure engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center p-4">
            <div style={{
              fontSize: '3rem',
              color: '#3066d9',
              marginBottom: '1rem'
            }}>
              ⏱️
            </div>
            <h5 style={{ color: '#3066d9', marginBottom: '1rem' }}>
              Timely Delivery
            </h5>
            <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
              We understand the importance of deadlines and consistently
              deliver projects on time without compromising quality.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mx-lg-0 mx-md-auto" style={{ maxWidth: '400px' }}>
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center p-4">
            <div style={{
              fontSize: '3rem',
              color: '#3066d9',
              marginBottom: '1rem'
            }}>
              💼
            </div>
            <h5 style={{ color: '#3066d9', marginBottom: '1rem' }}>
              Comprehensive Solutions
            </h5>
            <p style={{ color: '#6c757d', lineHeight: '1.6' }}>
              From initial design to final construction, we provide
              end-to-end engineering solutions for all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
    </div>
  );
};

export default About;