import React from 'react';
import Counter from '../Counter/Index';
import store from '../../store';

class CounterGroup extends React.Component {

    constructor() {
        super();

        this.state = {
            numberOfCounters: 0,
            total: store.getState().counters,
            counters: []
        }

        this.firstRef = React.createRef();
    }

    createCounterList() {
        let counterList = new Array(this.state.numberOfCounters)
            .fill(0)
            .map((value, index) => <Counter key={index} numberOfCounters={this.state.numberOfCounters} calculateTotal={this.calculateTotal.bind(this)} />);
        this.setCounters(counterList);
    }

    setCounters = counterList => {
        this.setState({
            counters: counterList
        });
    }

    handlInputChange = event => {
        store.dispatch({ type: 'RETURN_ZERO' });
        let count = 0;
        if (event.target.value < 0) {
            alert("Please give a number larger than 0!");
        } else {
            count = event.target.value;
        }
        this.setState({
            numberOfCounters: Number(count),
            total: 0
        }, () => this.createCounterList());
    }

    calculateTotal = () => {
        this.setState({
            total: store.getState().counters
        })
    }

    render() {
        return (
            <div>
                Number of Counters:
                <input type="number" className="count_input" value={this.state.numberOfCounters} onChange={this.handlInputChange}></input>
                <h3>Total: {this.state.total}</h3>
                {this.state.counters}
            </div>
        );
    }
}

export default CounterGroup;