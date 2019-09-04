import React, { Component } from 'react'

export default class Family extends Component {
  render() {
    let odd = "photos active"; 
    let nm = "photos"; 
    if (this.props.pos > 600 && this.props.pos < 1600){
      nm = "photos active"; 
      odd = "photos"; 
    }
    return (
      <div className="family-stuff">
        <div className={nm}>{this.props.pos}</div>
        
        <div className={odd}>{this.props.pos}</div>
        
        <div className={nm}>{this.props.pos}</div>
        
        <div className={odd}>{this.props.pos}</div>
        
        <div className={nm}>{this.props.pos}</div>
      </div>
    )
  }
}
