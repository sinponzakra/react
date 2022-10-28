import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export class RecentProject extends Component {

    constructor(){
        super();
        this.state = {
            myData:[]
        }
      }  
    
      componentDidMount(){
        RestClient.getRequest(AppUrl.ProjectHome).then(response=>{
            this.setState({myData: response});
        })
      }

    render() {


        const MyList = this.state.myData;
        const MyView = MyList.map(MyList =>{
            return (
                <Col lg={4} md={6} sm={12}>
                <Card className='projectCard'>
                    <Card.Img variant="top" src={MyList.img_one} />
                    <Card.Body>
                        <Card.Title className='serviceName'>{MyList.project_name} </Card.Title>
                        <Card.Text className='serviceDesc'>
                            {MyList.project_description}
                        </Card.Text>
                        <Button variant="primary"><Link className='link-style' to={'/projectdetails/'+MyList.id}>Visit Website</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
            )
        });


        return (
            <Fragment>
                <Container>
                <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
                <div className='bottomLine'></div>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default RecentProject