import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar.jsx'
import About from './component/About.jsx'

// Home component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="col-lg-8 text-center">
              <h1 style={{ fontSize: '3rem', color: '#3066d9', marginBottom: '2rem' }}>
                Welcome to Husma Engineering
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#6c757d', lineHeight: '1.6' }}>
                Your trusted partner for innovative engineering solutions and infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Placeholder components for other pages
const Services = () => (
  <div>
    <Navbar />
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Services</h1>
        <p>Services page coming soon...</p>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <div>
    <Navbar />
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Projects</h1>
        <p>Projects page coming soon...</p>
      </div>
    </div>
  </div>
)

const Contact = () => (
  <div>
    <Navbar />
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Contact</h1>
        <p>Contact page coming soon...</p>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
