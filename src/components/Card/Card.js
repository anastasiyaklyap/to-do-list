import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Card = ({ title, id, isFavorite }) => {
	const dispatch = useDispatch();
	const handleFavorite = () => {
		dispatch(toggleCardFavorite(id));
	};

	return (
		<li className={styles.card}>
			{title}
			<FontAwesomeIcon
				icon={faStar}
				className={isFavorite ? styles.favorite : styles.notFavorite}
				onClick={handleFavorite}
			/>
		</li>
	);
};

export default Card;
