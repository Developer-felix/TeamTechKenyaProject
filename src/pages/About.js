import React from 'react'
import Logo from '../img/sample 1.png'
import {connect} from 'react-redux'
const About = (props) =>{
    const {members} = props;
    console.log(props)
     const membersList = members.length ? (
       members.map(
         member =>{
           return(
           
            <div className="col-sm-6">
                <div class="card" key={member.id}>
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src={member.image}
      class="img-fluid"
    />
    
  </div>
  <div class="card-body">
    <h5 class="card-title">{member.name}</h5>
    <p class="card-text">
      {member.description}
    </p>
    <a href="#!" class="btn btn-primary">Button</a>
  </div>
</div>
            </div>
            
           )
         }
       )
     ) : (
       <div><h1>Not yet posted</h1></div>
     );
    return(
        <div  class="container">
            <div>
                <div class="row">
                     <div class="col-md-7 bg-primary">
                         About 
                     </div>
                     <div class="col-md-5">
                     <img src={Logo} alt="thumbnail" class="img-thumbnail"
  style={{width: "200px"}}/>
                     </div>
                 </div>
             </div>
             <div className="row">
             {membersList}
             </div>
     
</div>
        
    )
}
const mapStateToProps = (state) =>{
    return{
    members : state.members
    }
  }
export default connect(mapStateToProps)(About);