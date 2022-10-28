import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


export class Services extends Component {

  constructor(){
    super();
    this.state = {
        myData:[]
    }
  }  

  componentDidMount(){
    RestClient.getRequest(AppUrl.ServicesData).then(response=>{
        this.setState({myData: response});
    })
  }
  render() {

    const MyList = this.state.myData;
    const MyView = MyList.map(MyList =>{
        return (
            <Col lg={4} md={6} sm={12}>
                <div className='serviceCard text-center'>
                    <img className='serviceIconSize' src={MyList.service_image} />
                    <h2 className='serviceName'>{MyList.service_name}</h2>
                    <p className='serviceDesc'>{MyList.service_description}</p>
                </div>
            </Col>
        )
    });


    return (
        <Fragment>
            <Container>
                <h1 className='serviceMainTitle'>MY SERVICES</h1>
                <div className='bottomLine'></div>
                <Row>
                    {MyView}
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Services