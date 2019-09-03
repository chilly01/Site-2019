import React, { Component } from 'react'; 
import About from "./about/about"; 

export default class Home extends Component {
  constructor(props){
    super(props); 
    
    this.state = {
      position:0
    }

    window.onscroll= this.listenToScroll; 
  }

  listenToScroll = () => {
    let position= window.scrollY; 
    this.setState({position}); 
  }


  render() {
    return (<div className="home">
      <div className="computers">
        <About />
      </div>
      <div className="family">I love my family</div>
      <div className="mountains">I live in the mountains</div>
      <div className="photography">I enjoy taking pictures</div>
      <div id="sports" className="sports">I watch a lot of sports</div>
      <div className="footer">conclusion</div>
    </div>); 
  }
}
