import React, { Component } from 'react'; 
import _ from "lodash";
import Feedback from "./feedback"; 
import Socials from './socials';

export default class AboutMe extends Component {
  constructor(props){
    super(props); 
    this.state = {
      dis: 0
    }; 
  }

  showAbout(dis){
    this.setState({dis}) 
  }

  getDiscription(){
    switch (this.state.dis){
      case 1: return this.renderAboutSelf();
      case 2: return this.renderAboutSite(); 
      case 3: return this.renderFeedback(); 
      default: return this.renderMyLinks(); 
    }
  }

  renderMyLinks(){
    return (<div className="about-discription">
      <Socials />
    </div>); 
  }

  renderAboutSelf(){
    return (<div className="about-discription">
        <p>I was born and raised in Logan Utah.</p> 
        <p>In the summer between the third and fourth grade, 
        I was introduced to a Commadore 64. 
        I was allowed to program that device by using a new language called Basic. 
        I wrote my programs that counted and displayed funny jokes to a cassette tape drive. 
        From that time on I was hooked on computers. </p>
        <p>Below is a few articles and programs that I've worked on and up keep.</p>
      </div>); 
  }

  renderAboutSite(){
    return (<div className="about-discription">
      <p>I have been asking myself what do I want this site to do? 
      Mostly it's kind of a place where I can play with different programs and languages. I first made it to host my pictures and track players in a poker tournament that I hosted a few years back.</p>
      <p>But I have facebook to track my pictures and I don't manage that poker site any more.  Yet I still keep up this site.  It has evolved to a place for me to demostrate my skills.  To show old projects and put new ones.</p>
      <p>Viewers are invited to look over my projects that I've been working on or problems that I have solved.  This is also a place for me to go back through old code or host new code I'm still working on. </p>
      <p>So I guess this site is more for me then it is for the person that comes to this site.  However I am more then interested in what others think of my work and if they have any suggestions on how I can make this website better.</p>  
    </div>); 
  }

  renderFeedback(){
    return (<div className="about-discription">
    <p>Please provide any feedback or updates you would like to see on this site</p> 
    <Feedback />
    </div>);
  }

  renderTabs(){    
    const views = ["my links","about me","about this site","feedback", ""];
    let tabGroup = [];
    _.each(views, (view, key) => {
      let fnc = (key < 4) ? () => this.showAbout(key) : null; 
      let className = (key === this.state.dis) ? "about_tab about_tab_sel" : "about_tab"; 
      tabGroup.push(<div key={key} className={className} onClick={fnc}>{view}</div>); 
    }); 
    return tabGroup; 
  }

  render() {
    let discription = this.getDiscription();  
    return ( <div className="about">
      <div className="about_tab_group">
        {this.renderTabs()} 
      </div>
        {discription}
    </div>); 
  }
}
