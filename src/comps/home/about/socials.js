import React, { Component } from 'react'; 
import _ from "lodash";
import { data } from "../../../data/consts"; 

export default class Socials extends Component {

  renderLinks(){
    let linklist = []; 
    _.each(data.socials, (link) => {
      linklist.push(<a 
        key={link.key}
        href={ link.link }
        target="_blank" rel="noopener noreferrer"
        className='list-group-item socials__item'>
          <i className={`fa ${link.fa}`} aria-hidden="true"></i> {link.name}</a>); 
    }); 
    return linklist; 
  }


  render() {
    return (<div>
      <div className='socials-message'><p>Please feel free to contact me...</p></div>
      <div className='list-group'>
            { this.renderLinks() }      
      </div>
    </div>)
  }
}
