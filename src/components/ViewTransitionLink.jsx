import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function ViewTransitionLink({ to, children, className }) {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();

		if (document.startViewTransition) {
			document.startViewTransition(() => navigate(to));
		} else {
			navigate(to);
		}
	};

	return (
		<a href={to} onClick={handleClick} className={className}>
			{children}
		</a>
	);
}


ViewTransitionLink.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.element,
};
