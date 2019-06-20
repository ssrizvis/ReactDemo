import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	callCounters() {
		const { counters, onDelete, onIncrement, onDecrement } = this.props;
		return counters.map(counter => {
			return (
				<Counter
					key={counter.id}
					counter={counter}
					onDelete={onDelete}
					onDecrement={onDecrement}
					onIncrement={onIncrement}
				/>
			);
		});
	}

	render() {
		return (
			<React.Fragment>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				<br />
				{this.callCounters()}
			</React.Fragment>
		);
	}
}

export default Counters;
