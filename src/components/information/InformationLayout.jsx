import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { inf } = this.props;
		return (
			<div>
				<h2 className="mt-2 font-bold text-lg">{inf}</h2>
			</div>
		);
	}
}
