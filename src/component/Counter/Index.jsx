import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    // componentWillMount() {
    //     console.log("===============Component will be mounted===============");
    //     console.log(document.querySelector("#counter"));
    // }

    // componentDidMount() {
    //     console.log("===============Component be mounted===============");
    //     console.log(document.querySelector("#counter"));
    // }

    // componentWillUpdate(newProps, newState) {
    //     console.log("===============Component will be updated===============");
    //     console.log(document.querySelector("#counter"));
    // }


    // componentDidUpdate(newProps, newState) {
    //     console.log("===============Component will be unmounted===============");
    //     console.log(document.querySelector("#counter"));
    // }

    componentWillReceiveProps() {
        this.setState({
            number: 0
        })
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
        this.handleClick("+");
    };

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
        this.handleClick("-");
    }

    handleClick(calculeteMethod) {
        this.props.calculateTotal(calculeteMethod);
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