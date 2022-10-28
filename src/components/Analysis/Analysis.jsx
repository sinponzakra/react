import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart, ResponsiveContainer, Bar, XAxis, Tooltip  } from 'recharts';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


export class Analysis extends Component {

    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        RestClient.getRequest(AppUrl.ChartData).then(response => {
            this.setState({data: response})
        })
    }

  render() {
    return (
      <Fragment>
            <Container>
            <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
                <div className='bottomLine'></div>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={100} height={300} data={this.state.data}>
                                 <XAxis dataKey="Technology"></XAxis>
                                 <Tooltip/>
                                <Bar dataKey="Projects" fill="#051b35" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className='text-justify serviceDesc'>Developers, also known as software developers or computer
                        programmers, are responsible for developing, coding, installing,
                        and maintaining software systems. Developers form a key part
                        of the IT team and may be required to modify existing software
                        products or develop entirely new resources.
                        <br /><br /><br />
                        We are looking for a talented developer to join our experienced development team.
                         In this role, you will be responsible for designing, coding, testing, modifying,
                          and implementing new or existing software products. 
                          Your duties will include liaising with the development managers, 
                          writing clean, scalable code, creating testing protocols,
                           fixing bugs, and deploying programs.</p>
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default Analysis