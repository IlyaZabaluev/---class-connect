import styles from './GameLayout.module.css';
import { Field } from './components/Field';
import { Information } from './components/Information ';
import { useDispatch } from './redux-manager';

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
