import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export class ClientReview extends Component {
    render() {

        var settings = {
            dots: true,
            autoPlay: true,
            autoPlaySpeed: 3000,
            arrows:false,
            infinite: true,
            speed: 3000,
            vertical: true,
            verticalSweping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container fluid={true} className='sliderBack'>
                    <h1 className='reviewMainTitle'>TESTIMONIAL</h1>
                    <div className='reviewBottomLine'></div>
                    <Slider {...settings}>
                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src="https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=1380&t=st=1666015124~exp=1666015724~hmac=52c7c719b7d41a6a95c9861564ddce83b3720d48554966df83f4a44b6772623e" />
                                    <h2 className='reviewName'>Alice NATASHA</h2>
                                    <p className='reviewDesc'>Qualified web design and attractive effects which catches visitor's Eye.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=1380&t=st=1666015944~exp=1666016544~hmac=df598b43724a6da741542762ea3bf0ab2d9a18576215588865761cc6eac91548" />
                                    <h2 className='reviewName'>Charlie Steward</h2>
                                    <p className='reviewDesc'>Qualified web design and attractive effects which catches visitor's Eye.</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className='justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1380&t=st=1666015838~exp=1666016438~hmac=ecd9e3f170b5467561379d92f1cb48a315992ef542942130fc00bb92cf9c1d62" />
                                    <h2 className='reviewName'>Sophia Elberd</h2>
                                    <p className='reviewDesc'>Qualified web design and attractive effects which catches visitor's Eye.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}

export default ClientReview