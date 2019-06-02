import React, { Component } from 'react';
import cookie from './images/fortunecookie.png';


class Cookies extends Component {
  render() {
    return (
      <div className="cookies">
        <img id="cookie1" src={ cookie }/>
				<img id="cookie2" src={ cookie }/>
				<img id="cookie3" src={ cookie }/>
				<img id="cookie4" src={ cookie }/>
      </div>
    );
  }
}

export default Cookies;