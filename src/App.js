{/*import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Home from './components/home';
import FormContainer from './containers/FormContainer';
import Navigation from "./components/Navigation";

import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Router Redux</h2>
        </div>
        <Navigation context={this.context} />
        <div className="App-main">
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={FormContainer} />
        </div>
      </div>
    );
  }
}

export default App;


*/}


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'
import MainContainer from './containers/MainContainer'

function mapStateToProps(state) {
  return {
    fields: state.fields
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainContainer);


export default App;