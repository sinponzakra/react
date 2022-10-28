import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import whiteLogo from '../../asset/image/logo_white.png'
import blackLogo from '../../asset/image/logo_black.png'
import '../../asset/css/costum.css';
import {NavLink} from 'react-router-dom'


export class TopNavigation extends Component {

    constructor(props){
        super();
        this.state = {
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo], //object (image in our case)
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItems:"navItems",
            pageTitle:props.title
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({
                navBarTitle:'navTitleScroll',
                navBarLogo:[blackLogo],
                navBarBack:"navBackgroundScroll",
                navBarItems:"navItemsScroll",
                navVariant:"light"
            })
        }else if(window.scrollY < 100){
            this.setState({
                navBarTitle:'navTitle',
                navBarLogo:[whiteLogo],
                navBarBack:"navBackground",
                navBarItems:"navItems",
                navVariant:"dark"
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}><NavLink to='/'><img src={this.state.navBarLogo} /></NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                             
                            </Nav>
                            <Nav >
                            <Nav.Link><NavLink exact activeStyle={{ color:'#f1bc0c' }} className={this.state.navBarItems} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color:'#f1bc0c' }} className={this.state.navBarItems} to="/about">ABOUT</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeClassName='is-active' className={this.state.navBarItems} to="/service">SERVICE</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeClassName='is-active' className={this.state.navBarItems} to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeClassName='is-active' className={this.state.navBarItems} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeClassName='is-active' className={this.state.navBarItems} to="/contact">CONTACT US</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation