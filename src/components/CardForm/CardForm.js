import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = ({ columnId }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addCard({ title, columnId, isFavorite: false }));
		setTitle('');
	};

	return (
		<form
			className={styles.cardForm}
			onSubmit={handleSubmit}
		>
			<TextInput
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Button>Add card</Button>
		</form>
	);
};

export default CardForm;
