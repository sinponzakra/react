import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pDetails from '../../asset/image/pdetails.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class ProjectDetails extends Component {
  
    constructor(props){
        super();
        this.state={
            MyProjectID:props.id,
            project_name:"...",
            project_description:"..."
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppUrl.ProjectDetails+this.state.MyProjectID).then(response=>{
            this.setState({
                project_name: response[0]['project_name'],
                project_description: response[0]['project_description']});
        })
      }

    render() {

    const MyList = this.state.myData;
      

    return (
        <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='about-thumb-wrap after-shape'>
                            <img src={pDetails} alt="img" />
                        </div>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <div className='section-title mb-0 mt-5'>
                            <h1 className='projecttitle'>{this.state.project_name}</h1>
                            <p className='detailsName'>{this.state.project_description}</p>
                        </div>
                        <div>
                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckCircle} /> Requirement Gathering</p>
                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckCircle} /> System Analysis</p>
                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckCircle} /> Coding Testing</p>
                            <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullent' icon={faCheckCircle} /> Implimentation</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
  }
}

export default ProjectDetails