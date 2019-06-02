import React, { Component } from 'react';
import monster1 from './images/monster1.png';
import monster2 from './images/monster2.png';
import sasquatch from './images/sasquatch-gifnobg.gif';
import monster3 from './images/monster3.png';

class Monsters extends Component {
  render() {
    return (
      <div className="mAction">
        <img id="monster1" src={ monster1 }/>
				<img id="monster2" src={ monster2 }/>
				<img id="monster3" src={ sasquatch }/>
				<img id="monster4" src={ monster3 }/>
      </div>
				
			
    );
  }
}

export default Monsters;