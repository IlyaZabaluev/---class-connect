import PropTypes from 'prop-types';

export const InformationLayout = ({ inf }) => {
	return (
		<div>
			<h2>{inf}</h2>
		</div>
	);
};

InformationLayout.propTypes = { inf: PropTypes.string };
