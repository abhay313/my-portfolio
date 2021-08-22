import React, { Component } from 'react';

class Projects extends Component {

  render() {

    const style = {
      height: "300px",
      width: "200px",
      margin:"20px",
      padding: "20px",
      background: "#f2e0e0"
    };

    const imgStyle = {
      height: "150px",
      width: "170px"
    }

    
    if(this.props.data){
      var projectList = this.props.data.projects.map(function(project, index){
   
        return <div key={index} style={style} className="columns portfolio-item">
           <div className="item-wrap" style={style}>
           <img src={project.imgurl} alt={project.title} style={imgStyle}/>
           <div id="project-links">
             <h5>{project.title}</h5>
             <a href={project.online}>Live Link</a>
             <a href={project.github}>Get code</a>
           </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projectList}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Projects;
