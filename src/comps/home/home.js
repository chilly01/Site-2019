import React, { Component } from 'react'; 
import About from "./about/about"; 

export default class Home extends Component {
  render() {
    return (<div class="home">
    <div class="computers">
      <About />
    </div>
    <div class="family">I love my family</div>
    <div class="mountains">I live in the mountains</div>
    <div class="photography">I enjoy taking pictures</div>
    <div id="sports" class="sports">I watch a lot of sports</div>
    <div class="footer">conclusion</div>
  </div>); 
  }
}
