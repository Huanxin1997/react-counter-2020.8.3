import React from "./node_modules/react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            total: 0
        }
    }

    calculate = () => {
        this.setState({
            total: this.state.firstNumber + this.state.secondNumber
        })
    }

    change = (event, key) => {
        this.setState({
            key: 1
        })
    }

    render() {
        return (
            <div className="center_box">
                <div>
                    <input type="number" value={this.state.firstNumber} onChange={event => { this.change(event, "firstNumber") }} />
                </div>
                <div>
                    <input type="number" value={this.state.secondNumber} onChange={event => { this.change(event, "secondNumber") }} />
                </div>
                <button onClick={this.calculate}>Get Total</button>
                <div>
                    Total: {this.state.total}
                </div>
            </div>
        )
    }
}

export default Calculator;