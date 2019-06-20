import React, { Component } from "react";
class Counter extends Component {
	render() {
		const { onIncrement, onDecrement, counter, onDelete } = this.props;
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-1">
						<span className={this.getBadgeClass()}>{this.formatCount()}</span>
					</div>
					<div className="col">
						<button
							onClick={() => onIncrement(counter)}
							className="btn btn-secondary btn-sm"
						>
							+
						</button>
						<button
							onClick={() => onDecrement(counter)}
							className="btn btn-secondary btn-sm m-2"
							disabled={counter.value === 0}
						>
							-
						</button>
						<button
							className="btn btn-danger btn-sm"
							onClick={() => onDelete(counter.id)}
						>
							X
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}

	getBadgeClass() {
		let badgeClass = "badge m-2 badge-";
		badgeClass += this.props.counter.value === 0 ? "warning" : "primary";
		return badgeClass;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? <h6>Zero</h6> : value;
	}
}

export default Counter;
