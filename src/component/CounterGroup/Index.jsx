import React from 'react';
import Counter from '../Counter/Index';

class CounterGroup extends React.Component {

    constructor() {
        super();

        this.state = {
            numberOfCounters: 1,
            total: 0
        }
    }

    createCounterList() {
        return new Array(this.state.numberOfCounters).fill(0).map((value, index) => <Counter key={index} numberOfCounters={this.state.numberOfCounters} calculateTotal={this.calculateTotal.bind(this)} />);
    }

    handlInputChange = event => {
        let count = 0;
        if (event.target.value < 0) {
            alert("Please give a number larger than 0!");
        } else {
            count = event.target.value;
        }
        this.setState({
            numberOfCounters: Number(count),
            total: 0
        })
        this.createCounterList();
    }

    calculateTotal = calculateMethod => {
        if (calculateMethod === "+") {
            this.setState((prevState) => {
                return { total: prevState.total + 1 }
            })
        }
        else {
            this.setState((prevState) => {
                return { total: prevState.total - 1 }
            })
        }
    }

    render() {
        return (
            <div>
                Number of Counters:
                <input type="number" className="count_input" value={this.state.numberOfCounters} onChange={this.handlInputChange}></input>
                <h3>Total: {this.state.total}</h3>
                {this.createCounterList()}
            </div>
        );
    }
}

export default CounterGroup;