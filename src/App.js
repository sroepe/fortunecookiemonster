import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Monsters from './Monsters';
import Cookies from './Cookies';

class App extends Component {
  render(){
    return (

      <div className="App">
        <header className="App-header">
          <h1>Fortune Cookie <span>Monster</span></h1>
          <h6>Feed the monster, get a fortune!</h6>
        </header>
        <Monsters />
        <Cookies />
      </div>

    );
  }
}

export default App;
