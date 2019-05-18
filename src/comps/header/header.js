import React, { Component } from "react"; 

export default class Header extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selected : "home"
    }
  }

  

  render() {
    return (
      <div className="ch-header">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a> 
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="/">History</a> 
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="/">Blog</a> 
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="/">Projects</a> 
          </li>
         
        </ul>
      </div>
    );
  }
}
