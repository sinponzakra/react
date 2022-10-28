import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export class ContactSection extends Component {

    sendContact(e){
        
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let jsonObject = {name: name, email: email, message: message};

        RestClient.postRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(response => {
            alert(response);
        }).catch(error=>{
            alert('error');
        })

    }
    

    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'>Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter your email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control id="message" as="textarea" rows={3} />
                                </Form.Group>

                                <Button onClick={this.sendContact} variant="primary" type="submit">
                                    sent
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceName'style={{ textAlign: 'left' }}>Discuss Now</h1>
                            <p className='serviceDesc' style={{ textAlign: 'left' }}>
                                <FontAwesomeIcon icon={faLocationDot} /> 6522 Baltimore National Pike CotonVille, California USA <br />
                                <FontAwesomeIcon icon={faEnvelope} /> Email: Support@Web.com <br />
                                <FontAwesomeIcon icon={faPhone} /> Phone: +35322202522 <br />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ContactSection