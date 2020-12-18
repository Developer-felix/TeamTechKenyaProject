import React from 'react'
import {connect} from 'react-redux'


const Projects = (props) => {
    const {projects} = props;
    console.log(props)
     const projectList = projects.length ? (
       projects.map(
         project =>{
           return(
           
             <div className="col-9 mx-auto col-md-6 col-lg-3" >
               <div className="card" key={project.id}>
                   <div className="img-container p-5 " onClick={()=>console.log("You clicked")}>
                    
                    <img src={project.image} className="navbar-brand"  alt="project" className="card-img-top"/>
                    {project.body}
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
