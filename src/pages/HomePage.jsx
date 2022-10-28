import React, { Component, Fragment } from 'react'
import AboutUs from '../components/AboutUs/AboutUs';
import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';
import Welcome from '../components/Welcome/Welcome';

export class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0);
}
  render() {
    return (
      <Fragment>
        <TopNavigation  title="Learn Code"/>
        <TopBanner />
        <Welcome />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Courses />
        <Video />
        <ClientReview />
        <AboutUs />
        <Footer />
      </Fragment>
    )
  }
}

export default HomePage