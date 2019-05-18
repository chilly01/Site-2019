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

  render() {
    return (
      <div className="ch-header d-flex  align-items-center">
        <div className="ch-header-name">Cody Hillyard</div>
        <ul className="nav">
          {this.renderLinks()}
        </ul>
      </div>
    );
  }
}
