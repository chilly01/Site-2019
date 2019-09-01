import React, { Component } from "react";
import Home from "./home/home";
import Header from "./header/header"; 


export default class Site extends Component {
  constructor(props){
    super(props); 
    this.state = {
      page: "home"
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
