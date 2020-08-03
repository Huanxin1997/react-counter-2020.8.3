import React from 'react';
import store from '../../store';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    componentWillReceiveProps() {
        this.setState({
            number: 0
        })
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
        store.dispatch({ type: 'INCREASE' });
        this.handleClick();
    };

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
        store.dispatch({ type: 'DECREASE' });
        this.handleClick();
    }

    handleClick() {
        this.props.calculateTotal();
    }

    render() {
        return (
            <div id="counter">
                <button className="counter_button" onClick={this.decrease}>-</button>
                <span className="number_box">{this.state.number}</span>
                <button className="counter_button" onClick={this.increase}>+</button>
            </div>
        )
    }

}

export default Counter;