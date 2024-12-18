import { Component } from 'react';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information ';
export class GameLayout extends Component {
	render() {
		return (
			<div className="text-center mx-auto mt-10 w-80 h-96 border-2 border-lime-500 bg-gray-800 text-lime-500 shadow-md">
				<Information />
				<Field />
				<button
					className="hover:opacity-40 p-2 border-2 border-lime-500 bg-gray-800 rounded-lg text-lime-500 font-bold text-lg"
					onClick={this.props.restartGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}
