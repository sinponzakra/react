import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image1 from '../../asset/image/page1.png'
import Image2 from '../../asset/image/page2.png'
import Image3 from '../../asset/image/page3.png'
import Img1 from '../../asset/image/19.png'
import Img2 from '../../asset/image/20.png'
import Img3 from '../../asset/image/21.png'
class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <div className="into-area--top">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className='section-title text-center'>
                                    <div className='intro-area-inner'>
                                        <h6 className='sub-title double-line'>Welcome</h6>
                                        <h2 className='mainTitle'>
                                            An exemplary <br />
                                            Learning Comunnity
                                        </h2>

                                        <Container>
                                            <Row>
                                                <Col lg={4} md={6} sm={12}>
                                                    <div class="single-intro-inner style-thumb text-center">
                                                        <div class="thumb">
                                                            <img src={Image1} alt="img" />
                                                        </div>
                                                        <div class="details">
                                                            <h5>Postgraduate</h5>
                                                            <p>Lorem ipsum dolor</p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6} sm={12}>
                                                    <div class="single-intro-inner style-thumb text-center">
                                                        <div class="thumb">
                                                            <img src={Image2} alt="img" />
                                                        </div>
                                                        <div class="details">
                                                            <h5>Postgraduate</h5>
                                                            <p>Lorem ipsum dolor</p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6} sm={12}>
                                                    <div class="single-intro-inner style-thumb text-center">
                                                        <div class="thumb">
                                                            <img src={Image3} alt="img" />
                                                        </div>
                                                        <div class="details">
                                                            <h5>Postgraduate</h5>
                                                            <p>Lorem ipsum dolor</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>

                                        <Container className='intro-footer bg-base'>
                                            <Row className='row'>
                                                <Col lg={4} md={6} sm={12}>
                                                    <div class="single-list-inner">
                                                        <div class="media">
                                                            <div class="media-left">
                                                                <img src={Img1} alt="img" />
                                                            </div>
                                                            <div class="media-body align-self-center">
                                                                <h5 className='serviceName'>Engineering</h5>
                                                                <p>Lorem ipsum dolor</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6} sm={12}>
                                                    <div class="single-list-inner">
                                                        <div class="media">
                                                            <div class="media-left">
                                                                <img src={Img2} alt="img"/>
                                                            </div>
                                                            <div class="media-body align-self-center">
                                                                <h5 className='serviceName'>PHD Scholarship</h5>
                                                                <p>Lorem ipsum dolor</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6} sm={12}>
                                                    <div class="single-list-inner">
                                                        <div class="media">
                                                            <div class="media-left">
                                                                <img src={Img3} alt="img"/>
                                                            </div>
                                                            <div class="media-body align-self-center">
                                                                <h5 className='serviceName'>Accounting</h5>
                                                                <p>Lorem ipsum dolor</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Welcome