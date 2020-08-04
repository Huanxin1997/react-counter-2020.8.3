import React from 'react';
import Counter from '../../containers/counterContainer';
import store from '../../store';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);

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
            .map((value, index) => <Counter key={index} numberOfCounters={this.state.numberOfCounters} />);
        this.setCounters(counterList);
    }

    setCounters = counterList => {
        this.setState({
            counters: counterList
        });
    }

    handlInputChange = event => {
        this.props.returnZero();
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

    render() {
        return (
            <div>
                Number of Counters:
                <input
                    type="number"
                    className="count_input"
                    value={this.state.numberOfCounters}
                    onChange={this.handlInputChange}>
                </input>
                <h3>Total: {this.props.total}</h3>
                {this.state.counters}
            </div>
        );
    }
}

export default CounterGroup;