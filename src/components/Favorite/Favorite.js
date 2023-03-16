import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import styles from '../Column/Column.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
	const cards = useSelector(getFavoriteCards);
	if (!cards.length) return <h3>There is no card in favorites</h3>;
	return (
		<>
			<PageTitle>Favorite</PageTitle>

			<article className={styles.column}>
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
			</article>
		</>
	);
};

export default Favorite;
