import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export class TopBanner extends Component {

    constructor(){
        super();
        this.state = {
            title:"...",
            subtitle:"..."
        }
    }

    componentDidMount() {
       RestClient.getRequest(AppUrl.HomeTopTitle).then(result=>{
        this.setState({
            title:result[0]['home_title'],
            subtitle:result[0]['home_subtitle'],
        })
       }).catch(error=>{
        this.setState({
            title:"???",
            subtitle:"???"
        })
       });
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topFixedBanner p-0'>
                    <div className='topBannerOverlay'>
                        <Container className='topContent'>
                            <Row>
                                <Col>
                                    <h1 className='topTitle'>{this.state.title}</h1>
                                    <h4 className='topSubTitle'>{this.state.subtitle}</h4>
                                    <Button variant='primary'>Learn More</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default TopBanner