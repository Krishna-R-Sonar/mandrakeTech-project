import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`
        shadow-sm py-3
        top-bar top-bar--dark transition-off nt-shortcode-header
        ${scrolled ? 'is-sticky sticked' : ''}
      `}
      bg="white"
      variant="light"
    >
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand href="https://telosa.review/" className="d-flex align-items-center">
          <img
            src="https://telosa.review/wp-content/uploads/2021/08/logo1.png"
            alt="Telosa"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span style={{ fontWeight: 600, fontSize: '1.25rem', color: '#333' }}>
            Telosa
          </span>
        </Navbar.Brand>

        {/* Mobile Nav Toggler */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#" className="mx-2">Products</Nav.Link>
            <Nav.Link href="#" className="mx-2">Solutions</Nav.Link>
            <Nav.Link href="#" className="mx-2">Resources</Nav.Link>
            <Nav.Link href="https://telosa.review/pricing" className="mx-2">
              Pricing
            </Nav.Link>
          </Nav>

          {/* Action Buttons */}
          <div className="d-flex">
            <Button
              variant="outline-primary"
              className="me-2"
              href="https://telosa.in/Login"
              target="_blank"
              style={{ fontWeight: '500' }}
            >
              SIGN UP
            </Button>
            <Button
              variant="primary"
              style={{ fontWeight: '500' }}
              onClick={() => {
                // Calendly popup initialization
                window.Calendly &&
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/telosa/30mins?hide_event_type_details=1',
                  })
              }}
            >
              WATCH DEMO
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
