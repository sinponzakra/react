import React, { Component, Fragment } from 'react'
import { Button, Col, Container,Modal, Row } from 'react-bootstrap'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton, VolumeMenuButton } from 'video-react';



export class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false});
    modalOpen=()=>this.setState({show:true});

  render() {
    return (
      <Fragment>
            <Container>
            <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
                <div className='bottomLine'></div>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <p style={{ textAlign: 'left'}} className='serviceDesc'> Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems. Developers form a key part of the IT team and may be required to modify existing software products or develop entirely new resources.

                    <br /><br />
                    We are looking for a talented developer to join our experienced development team. In this role, you will be responsible for designing, coding, testing, modifying, and implementing new or existing software products. Your duties will include liaising with the development managers, writing clean, scalable code, creating testing protocols, fixing bugs, and deploying programs.
                    </p>
                    </Col>

                    <Col lg={6} md={6} sm={12} className='videoCard'>
                        <FontAwesomeIcon onClick={this.modalOpen} className='iconProject' icon={faVideoSlash} /> 
                    </Col>
                </Row>
            </Container>


            <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                <Modal.Body>
                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                  <BigPlayButton position="center" />
                  <VolumeMenuButton />
                </Player>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.modalClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
      </Fragment>
    )
  }
}

export default Video