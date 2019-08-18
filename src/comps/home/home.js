import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (<div id="news_feed" className="row content">
        <div className="col-sm-2"></div>
                <div className="ch-msg col-sm-8">
                <div className="d-flex">
                <div className="ch_act">
                  <img className="ch-img" src="http://codyhillyard.com/assets/images/lucky_small.png" alt="self"/>
                  <h3>Cody Hillyard</h3>
                </div> 
                <div className='list-group'>
                        <a href='https://www.linkedin.com/in/cody-hillyard' target="_blank" rel="noopener noreferrer" className='list-group-item'><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
                        <a href='https://www.facebook.com/cody.hillyard' target="_blank" rel="noopener noreferrer" className='list-group-item'><i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a>
                        <a href='https://twitter.com/chillyard' target="_blank" rel="noopener noreferrer" className='list-group-item'><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter</a>
                        <a href='https://github.com/chilly01' target="_blank" rel="noopener noreferrer" className='list-group-item'><i className="fa fa-github-square" aria-hidden="true"></i> GitHub</a>
                        <div className='list-group-item'><i className="fa fa-envelope-open" aria-hidden="true"></i> Email</div>
                    </div></div>
                    <div className="card bg-light about_body">
                    <div className="card-body">I was born and raised in Logan Utah.  
                    In the summer between the third and fourth grade,
                    I was introduced to a Commadore 64.  
                    I was allowed to program that device by using a new language called Basic. 
                    I wrote my programs that counted and displayed funny jokes to a cassette tape drive.  
                    From that time on I was hooked on computers.  
                    Below is a few articles and programs that I've worked on and up keep.</div>
                <h3 className="about_body">Please Enjoy!</h3>
                </div>
               
                </div>
                <div className="ch_act col-sm-3">
                    
                </div>
            </div>); 
  }
}
