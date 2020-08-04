import actions from '../actions/index';
import { connect } from 'react-redux';
import CounterGroup from '../component/CounterGroup/Index';

const mapDispatchToProps = dispatch => {
    return {
        returnZero: () => dispatch(actions.returnZero())
    }
}
 
const mapStateToProps = state => {
    return {
        total: state.total
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup);