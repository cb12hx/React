import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Demo from '../components/Demo';
import * as DemoActions from '../actions/Demo';

const mapStateToProps=state=>{
	return state.demo1
} ;
const mapDispatchToProps=dispatch=>{
    return{
        actions : bindActionCreators(DemoActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo);