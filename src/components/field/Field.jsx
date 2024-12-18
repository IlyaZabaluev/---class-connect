import { Component } from 'react';
import { connect } from 'react-redux';
import { FieldLayout } from '../field/FieldLayout';
import {
	selectGetField,
	selectCurrentPlayer,
	selectIsGameEnded,
} from '../../selectors/selectors';

export class FieldContainer extends Component {
	WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	setGetFieldValue = (i) => {
		const { isGameEnded, getField, currentPlayer, dispatch } = this.props;

		if (isGameEnded === true) {
			dispatch({ type: 'RESTART_GAME' });
			return;
		}

		if (getField[i]) return;

		let newGetField = getField.slice();
		newGetField[i] = currentPlayer;
		dispatch({ type: 'SET_GET_FIELD', payload: newGetField });

		currentPlayer === 'X'
			? dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'O' })
			: dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: 'X',
				});

		for (let combination of this.WIN_PATTERNS) {
			const [a, b, c] = combination;
			if (
				getField[a] &&
				getField[a] === getField[b] &&
				getField[b] === getField[c]
			) {
				dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			}
		}
	};

	render() {
		return (
			<FieldLayout
				setGetFieldValue={this.setGetFieldValue}
				getField={this.props.getField}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	getField: selectGetField(state),
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);
