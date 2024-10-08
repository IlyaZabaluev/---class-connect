import styles from '../GameLayout.module.css';
import PropTypes from 'prop-types';
import { useSelector } from '../redux-manager';

export const FieldLayout = ({ setGetFieldValue }) => {
	const { getField } = useSelector();

	return (
		<div className={styles['container-button']}>
			{getField.map((el, index) => (
				<button onClick={() => setGetFieldValue(index)} key={index}>
					{el ? el : '-'}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	setGetFieldValue: PropTypes.func,
};
