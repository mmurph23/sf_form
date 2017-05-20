import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import MainContainer from './containers/MainContainer';

function mapStateToProps(state) {
  return {
    form: state.form,

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default App;