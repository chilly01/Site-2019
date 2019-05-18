import React, { Component } from "react"; 
import _ from "lodash"; 
import { data } from "../../data/pages"; 

export default class Header extends Component {

  choosePage(e, page){
    console.log({e,page}); 
    e.preventDefault(); 
    this.props.setPage(page); 
  }

  renderLinks(){
    let pages = []; 
    _.each(data.pages, (page => {
      pages.push(<li key={page.key} className={`nav-item header-link-${page.key}`}>
        <a className="nav-link" href="/"  onClick={(e) => this.choosePage(e, page.key)}>{page.name}</a> 
      </li>); 
    })); 
    return pages; 
  }

  render() {
    return (
      <div className="ch-header">
        <ul className="nav">
          {this.renderLinks()}
        </ul>
      </div>
    );
  }
}
