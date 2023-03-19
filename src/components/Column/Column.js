import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = ({ title, icon, id }) => {
	const cards = useSelector((state) => getFilteredCards(state, id));

	return (
		<>
			<article className={styles.column}>
				<h2 className={styles.title}>
					<span className={`${styles.icon} fa fa-${icon}`}></span>
					{title}
				</h2>
				<ul className={styles.cards}>
					{cards.map((card) => (
						<Card
							key={card.id}
							title={card.title}
							id={card.id}
							isFavorite={card.isFavorite}
						/>
					))}
				</ul>
				<CardForm columnId={id} />
			</article>
		</>
	);
};

export default Column;
