import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import ContactSection from '../components/ContactSection/ContactSection'

export class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0);
}
  render() {
    return (
        <Fragment>
            <TopNavigation title="Contact Us"/>
            <PageTop pagetitle="Contact Us" />
            <ContactSection />
            <Footer />
        </Fragment>
    )
  }
}

export default ContactPage