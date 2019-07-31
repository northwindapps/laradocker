import React, { Component} from 'react';
import './Top.css';
import { Route, Link} from 'react-router-dom';
//import Profile from '/Users/yujin/Desktop/weeblyclone/weeblyclone/src/containers/Profile/Profile.js';

class Top extends Component {
  render () {
    return (
      <div className="Top">
        <div className="banner-wrapper" >
          <div className="banner">
            <div className="banner-container" >
              <div className="section-elements" >
                <h2 className="content-title">
                Northwindapps</h2>
                  <div className="paragraph">
                    Thanks for coming to this website. This is the support site of my iOS products and other stuff.
                    <br/>Yujin Yano, mobile developer
                  </div>
              </div>
            </div>
          </div>
        </div>
          <div className="main-content-wrapper" >
            <div className="container" >
              <div className="paragraph">
                The latest mobile app..
              </div>
              <div className="image-border">
                <a>
                  <img src={require("/Users/yujin/Desktop/weeblyclone/client/src/simulator-screen-shot-iphone-8-plus-2019-06-23-at-20-19-32_orig.png")}/>
                </a>
              </div>
            </div>
          </div>
        <div className="footer-wrapper" >
          <h1>This is footer, How're you?</h1>
        </div>
      </div>
    );
  }
}

//That's right react

export default Top;
