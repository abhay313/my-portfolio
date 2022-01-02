import React, { Component } from 'react';

class Experience extends Component {
  render() {

    if(this.props.data){
    
      var education = this.props.data.education.map(function(education){
        return <div key={education.college}><h3>{education.college}</h3>
        <p className="info">{education.degree}, {education.major} - {education.batch} <br/> {education.cgpa} </p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.experience.map(function(work, index){

        return <div key={index}><h3>{work.CompanyName}</h3>
            <p className="info"> {work.Role} - {work.Duration}</p>
            <p>{work.Description}</p>
        </div>
      })
      
      var skills = this.props.data.skills.map(function(skills, index){
        return <div className="skills" key={index}><li><em><span>&bull;</span> {skills.skillname}</em></li></div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
          
				   <ul className="skills">
					  {skills}
					</ul>
			</div>
      </div>
   </section>
    );
  }
}

export default Experience;
