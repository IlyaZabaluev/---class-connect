import styles from '../../GameLayout.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectGetField } from '../../selectors/selectors';

export const FieldLayout = ({ setGetFieldValue }) => {
	const getField = useSelector(selectGetField);

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
