import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
const Card = ({ title, id, isFavorite }) => {
	const dispatch = useDispatch();
	const handleFavorite = () => {
		dispatch(toggleCardFavorite(id));
	};
	const handleRemove = () => {
		dispatch(removeCard(id));
	};

	return (
		<li className={styles.card}>
			{title}
			<div>
				<FontAwesomeIcon
					icon={faStar}
					className={isFavorite ? styles.favorite : styles.notFavorite}
					onClick={handleFavorite}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					onClick={handleRemove}
				/>
			</div>
		</li>
	);
};

export default Card;
