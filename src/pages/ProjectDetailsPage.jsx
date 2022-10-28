import React, { useEffect , Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import { useParams } from 'react-router-dom'


function ProjectDetailsPage () {

  let { id } = useParams();
  
  useEffect(() => {
    window.scroll(0,0);
  });

    return (
      <Fragment>
            <TopNavigation title="Project Details"/>
            <PageTop pagetitle="Project Details" />
            <ProjectDetails id={ id } />
            <Footer />
      </Fragment>
    )
  
}



export default ProjectDetailsPage