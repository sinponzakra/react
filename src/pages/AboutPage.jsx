import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AboutUs from '../components/AboutUs/AboutUs';


class AboutPage extends Component {
  componentDidMount(){
      window.scroll(0,0);
  }
  render() {
    return (
      <Fragment>
            <TopNavigation title="About Us"/>
            <PageTop pagetitle="About Us" />
            <AboutUs />
            <AboutDescription />
            <Footer />
      </Fragment>
    )
  }
}

export default AboutPage