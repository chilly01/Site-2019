import React, { Component } from "react"; 
import _ from "lodash"; 
import { data } from "../../data/pages"; 

export default class Header extends Component {

  choosePage(page){
    this.props.setPage(page); 
  }

  renderLinks(){
    let pages = []; 
    _.each(data.pages, (page => {
      pages.push(<li key={page.key} className={`nav-item header-link-${page.key}`}>
        <span className="ch-nav nav-link" onClick={() => this.choosePage(page.key)}>{page.name}</span> 
      </li>); 
    })); 
    return pages; 
  }

  render_old() {
    return (
      <div className="ch-header container-fluid">
        <div className="row">
          <div className="col ch-header-name">Cody Hillyard</div>
          <div className="col">
            <ul className="nav">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render(){
    return (<div class="intro">
    <div class="header">
      <div class="main-name">
        Cody Hillyard
        </div>
        <div class="topnav">
            <a href="/">Home</a>
            <a href="/">Work</a>
            <a href="/">Community</a>
            <a href="/">Projects</a>
        </div>
      </div>
  </div>); 
  }
}
