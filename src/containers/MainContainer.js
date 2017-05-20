import React, { Component } from 'react';
import { Link } from 'react-router';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Support Form</Link>
        </h1>
      {React.cloneElement(this.props.children, this.props)} 
      </div>
    )
  }
}

export default MainContainer;