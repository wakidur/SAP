Step - 1;
import React, { Component } from 'react';
class Drawar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    // Rendering logic....
    return (
      <div>
        <button onClick={this.onToggleButtonClick.bind(this)}></button>
        {this.renderDrawer()}
      </div>
    );
  }

  renderDrawer() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Some link</a>
          </li>
          <li>
            <a href="#">Another link</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Drawar;
