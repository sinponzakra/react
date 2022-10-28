import React, { Component, Fragment } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import AllCoursesPage from "../pages/AllCoursesPage";
import AllServicesPage from "../pages/AllServicesPage";
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import PortfoleoPage from "../pages/PortfoleoPage";
import ContactPage from "../pages/ContactPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

export class AppRouter extends Component {
  render() {
    return (
       <Fragment>
          <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route exact path="/service" element={<AllServicesPage />}/>
                <Route exact path="/course" element={<AllCoursesPage />}/>
                <Route exact path="/portfolio" element={<PortfoleoPage />}/>
                <Route exact path="/about" element={<AboutPage />}/>
                <Route exact path="/contact" element={<ContactPage />}/>
                <Route exact path="/refundPolicy" element={<RefundPolicyPage />}/>
                <Route exact path="/projectdetails/:id" element={<ProjectDetailsPage />}/>
          </Routes>
       </Fragment>
    )
  }
}

export default AppRouter