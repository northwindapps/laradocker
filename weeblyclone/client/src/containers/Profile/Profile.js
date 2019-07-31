import React, { Component} from 'react';
import './Profile.css';
import { Route, Link} from 'react-router-dom';

class Profile extends Component {
  render () {
    return (
      <div className="Profile">
        <div className="container">
          <ul className="menu">
            <li className="menu-item-wrap1"><a href="/">About me</a></li>
            <li className="menu-item-wrap2"><a href="/">Description</a></li>
            <li className="menu-item-wrap3"><a href="/">Useful Info</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
//That's right react

export default Profile;
