import React, { Component} from 'react';
import './Basement.css';
import { Route, NavLink} from 'react-router-dom';
import Profile from '/Users/yujin/Desktop/weeblyclone/client/src/containers/Profile/Profile.js';
import Policy from '/Users/yujin/Desktop/weeblyclone/client/src/containers/Policy/Policy.js';
import Top from '/Users/yujin/Desktop/weeblyclone/client/src/containers/Top/Top.js';
import axios from "axios";

const getBreeds = async () => {
  try {
    return await axios.post('/api/email')
  } catch (error) {
    console.error(error)
  }
};

class Basement extends Component {

  handleSubmit = async (e)=>{
    e.preventDefault()
    //const test = await axios.post('/api/email',{
    //})
  }

  componentDidMount() {
    // getBreeds()
  }

  render () {
    return (
      <div className="Basement">
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item-wrap1"><NavLink to="/" exact>Top</NavLink></li>
            {/* <li className="menu-item-wrap2"><NavLink to="/about">Tutorial Material</NavLink></li> */}
            <li className="menu-item-wrap3"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <Route path="/" exact component={Top} />
        {/* <Route path="/about" component={Profile} /> */}
        <Route path ="/contact" component={Policy}></Route>
      </div>
    );
  }
}

//That's right react

export default Basement;
