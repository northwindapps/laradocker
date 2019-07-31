import React, {Component} from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Route} from 'react-router-dom';
import Basement from './containers/Basement'



class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Basement />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
