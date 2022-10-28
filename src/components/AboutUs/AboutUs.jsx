import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png'
import { init } from 'ityped'


export class AboutUs extends Component {

    componentDidMount(){
        const myElement = document.querySelector('#myElement');
        init(myElement, { showCursor: false, strings: ['Web Developer!', 'Online Instructor!' ] })
      }

  render() {
    return (
      <Fragment>
            <Container>
            <h1 className='serviceMainTitle'>ABOUT US</h1>
                    <div className='bottomLine'></div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="aboutImg">
                            <img className='aboutMeImg' src={face} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='aboutMeBody'>
                            <h2 className='aboutMeDesc'>Hi there, i'm</h2>
                            <h2 className='aboutMeTitle'>Alex Fenrir</h2>
                            <h3>Work as <span id='myElement'></span></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default AboutUs