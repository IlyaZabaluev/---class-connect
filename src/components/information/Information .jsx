import { InformationLayout } from './InformationLayout';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectGetField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors/selectors';

export const Information = () => {
	const getField = useSelector(selectGetField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);
	const dispatch = useDispatch();

	let inf = '';
	const res = getField.includes('');

	if (isGameEnded === true && res === false) {
		dispatch({ type: 'SET_IS_DRAW', payload: true });
	}

	if (isDraw === false && isGameEnded === false) {
		inf = `Ходит: ${currentPlayer}`;
	} else if (isDraw === true) {
		inf = 'Ничья';
	} else if (isDraw === false && isGameEnded === true) {
		inf = `Победа: ${currentPlayer}`;
	} else {
		inf = '';
	}

	return <InformationLayout inf={inf} />;
};
