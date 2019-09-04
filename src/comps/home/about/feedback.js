import React, { Component } from 'react';

export default class Feedback extends Component {
  render() {
    return (<div className="feedback">
      <div className="feedback-name">
        <div>Your Name</div>
        <input type="text" id="name" name="name" placeholder="Your Name Here"/>
      </div>
      <div className="feedback-subject">
        <div>How can I improve this site?</div>
        <textarea id="subject" name="subject" placeholder="Write any Ideas.."></textarea>
      </div>
      <div className="feedback-submit">
        <button>Submit</button>     
      </div>
  </div>);
  }
}
