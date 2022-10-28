import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import ContactSection from '../components/ContactSection/ContactSection'
import Services from '../components/Services/Services'


export class AllServices extends Component {
  componentDidMount(){
    window.scroll(0,0);
}
  render() {
    return (
    <Fragment>
        <TopNavigation title="All Services"/>
        <PageTop pagetitle="All Services" />
        <Services />
        <ContactSection />
        <Footer />
    </Fragment>
    )
  }
}

export default AllServices