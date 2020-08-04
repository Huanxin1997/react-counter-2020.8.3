import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.numberOfCounters !== this.props.numberOfCounters) {
            this.setState({
                number: 0
            })
        }
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
        this.props.increase();
    };

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
        this.props.decrease();
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