import React, { Component} from 'react';
import './Policy.css';
import { Route, Link} from 'react-router-dom';

class Policy extends Component {
  
  handleChange = e =>{
    console.log("Need help?");
    
  }

  render () {
    return (
      <div className="Policy">
        <div className="banner-wrapper">
          <div className="backgroundimg">
            <img className="imgsource" style={{resizeMode:'contain'}} src={require("/Users/yujin/Desktop/weeblyclone/client/src/sapporo.jpg")}/>
          </div>
        </div>
        <h2>Contact Form</h2>
        <div className="form-wrapper">
        <label className="name-label">Name<span className="required"></span></label>
          <div className="firstname-wrapper">
            <input type="text" placeholder="Firstname" onChange={this.handleChange}/>
          </div>
          <div className="lastname-wrapper">
            <input type="text" placeholder="Lastname"/>
          </div>
        </div>

        <div className="form-wrapper">
        <label className="email-label">Email<span className="required"></span></label>
          <div className="email-wrapper">
            <input type="text" placeholder="email-address"/>
          </div>
        </div>

        <div className="form-wrapper-bottom">
        <label className="message-label">Message<span className="required"></span></label>
          <div className="message-wrapper">
              <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="form-wrapper-button"><button className="submit-button"><span>Submit</span></button></div>
        
      </div>
    );
  }
}

export default Policy;
