import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import resumeData from './resumeData';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header data={resumeData}/>
        <About data={resumeData}/>
        <Experience data={resumeData}/>
        <Projects data={resumeData}/>
        <Contact data={resumeData}/>
        <Footer data={resumeData}/>
      </div>
    );
  }
}

export default App;
