import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'


export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='footerSection'>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName'>Follow Us</h2>
                    <div className="social-container">
                        <a href="#" className='social'><FontAwesomeIcon className='iconProject' icon={faFacebook} /></a>
                        <a href="#" className='social'><FontAwesomeIcon className='iconProject' icon={faYoutube} /></a>
                        <a href="#" className='social'><FontAwesomeIcon className='iconProject' icon={faTwitter} /></a>
                        <a href="#" className='social'><FontAwesomeIcon className='iconProject' icon={faInstagram} /></a>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName'>Adress</h2>
                    <p className='footerDesc' style={{ textAlign: 'left'}}>
                    <FontAwesomeIcon icon={faLocationDot} /> 6522 Baltimore National Pike CotonVille, California USA <br />
                        <FontAwesomeIcon icon={faEnvelope} /> Email: Support@Web.com <br />
                        <FontAwesomeIcon icon={faPhone} /> Phone: +35322202522 <br />
                    </p>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName'>Information</h2>
                    <a href="#" className='footerLink'>About Us</a> <br />
                    <a href="#" className='footerLink'>Company Profile</a> <br />
                    <a href="#" className='footerLink'>Contact Us</a>
                </Col>

                <Col lg={3} md={6} sm={12}>
                    <h2 className='footerName'>Policy</h2>
                    <NavLink to="/refundPolicy" className='footerLink'>Refund Policy</NavLink> <br />
                    <a href="#" className='footerLink'>Terms and Condition</a> <br />
                    <a href="#" className='footerLink'>Privacy policy</a>
                </Col>
            </Row>
        </Container>

        <Container fluid={true} className='copyrightSection'>
            <a className='copyrightLink' href="#">© Copyright By Sinponzakra,All right Reserved</a>
        </Container>
      </Fragment>
    )
  }
}

export default Footer