import { Component } from 'react';

export class FieldLayout extends Component {
	render() {
		const { getField, setGetFieldValue } = this.props;

		return (
			<div className="m-8">
				{getField.map((el, index) => (
					<button
						className="hover:opacity-50 m-3 w-12 h-12 p-2 border-2 border-lime-500 bg-gray-800 rounded-lg text-lime-500 font-bold text-lg"
						onClick={() => setGetFieldValue(index)}
						key={index}
					>
						{el ? el : '-'}
					</button>
				))}
			</div>
		);
	}
}
