import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Demo from '../components/Demo';
import * as DemoActions from '../actions/Demo';

const mapStateToProps = state => state.register;
const mapDispatchToProps = dispatch => bindActionCreators(DemoActions, dispatch);
export default connect(null,mapDispatchToProps)(Demo);