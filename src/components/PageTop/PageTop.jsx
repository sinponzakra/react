import React, { Component, Fragment } from 'react'
import { Container, Row, Col  } from 'react-bootstrap';

export class PageTop extends Component {
  render() {
    return (
        <Fragment>
        <Container fluid={true} className='topFixedPage p-0'>
            <div className='topPageOverlay'>
                <Container className='topContentPage'>
                    <Row>
                        <Col>
                            <h1 className='topPageTitle'>{this.props.pagetitle}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </Fragment>
        )
  }
}

export default PageTop