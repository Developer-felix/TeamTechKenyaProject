import React from 'react'
import {connect} from 'react-redux'


const Projects = (props) => {
    const {projects} = props;
    console.log(props)
     const projectList = projects.length ? (
       projects.map(
         project =>{
           return(
           
            
             
                 
                  <div class="col-lg-4 col-md-12 mb-4">
  
                      
                      <div class="card">
  
                          
                          <div class="view overlay">
                              <img src={project.image} class="card-img-top" alt=""/>
                              <a href="https://mdbootstrap.com/angular/" target="_blank">
                                  <div class="mask rgba-white-slight"></div>
                              </a>
                          </div>
  
                          
                          <div class="card-body">
                              
                              <h4 class="card-title">{project.title}</h4>
                              
                              <p class="card-text">Built with Angular 5, Bootstrap 4 and TypeScript. CLI version available. </p>
                              <a href=""  class="btn btn-primary btn-md">More
                                  <i class="fas fa-download ml-2"></i>
                              </a>
                          </div>
  
                      </div>
                      
  
                  </div>
                 
  
                
            
           )
         }
       )
     ) : (
       <div><h1>Not yet posted</h1></div>
     );
        return (
            <div className="container">
              <div className="row">
              {projectList}
              </div>
             
</div>
        )
    
}
const mapStateToProps = (state) =>{
  return{
  projects : state.projects
  }
}
export default connect(mapStateToProps)(Projects);
