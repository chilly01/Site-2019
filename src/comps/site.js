import React, { Component } from "react";
import Header from "./header/header"; 
import Home from "./home/home";
import Blog from "./blog/blog"; 
import History from "./history/history"; 
import Projects from "./projects/projects"; 

export default class Site extends Component {
  constructor(props){
    super(props); 
    this.state = {
      page: "home"
    }
  }

  showPage(){
    switch (this.state.page){
      case "home": return (<Home />);
      case "blog": return (<Blog />);
      case "history": return (<History />);
      case "projects": return (<Projects />); 
      default: return (null); 
    }
  }

  render() {
    return (
      <div>
        <Header setPage={(page) => {this.setState({page})}} />
        <div className="container-fluid">
          {this.showPage()}
        </div>
      </div>
    );
  }
}
