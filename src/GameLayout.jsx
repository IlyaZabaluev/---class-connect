import styles from './GameLayout.module.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information ';
import { useDispatch } from 'react-redux';

export const GameLayout = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button onClick={() => dispatch({ type: 'RESTART_GAME' })}>
				Начать заново
			</button>
		</div>
	);
};
