import actions from '../actions/index';
import { connect } from 'react-redux';
import Counter from '../component/Counter/Index';

const mapDispatchToProps = dispatch => {
    return {
        increase: () => { dispatch(actions.increase()) },
        decrease: () => { dispatch(actions.decrease()) }
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
)(Counter);