import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 5 },
			{ id: 3, value: 0 },
			{ id: 4, value: 9 }
		]
	};

	_handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = counter;
		counters[index].value--;
		this.setState({ counters });
	};

	_handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = counter;
		counters[index].value++;
		this.setState({ counters });
	};

	_handleDelete = counterId => {
		const counters = this.state.counters.filter(
			counter => counter.id !== counterId
		);
		this.setState({ counters });
	};

	_handleReset = () => {
		const counters = this.state.counters.map(counter => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter(c => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onDelete={this._handleDelete}
						onIncrement={this._handleIncrement}
						onDecrement={this._handleDecrement}
						onReset={this._handleReset}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
