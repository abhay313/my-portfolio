import React, { Component } from 'react';
import profilePic from '../assets/profile.jpg';


class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.aboutme;
      var resumeDownload = this.props.data.resumeDownload;
    }


    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilePic} alt="Abhay Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p class="bio">{bio}</p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
