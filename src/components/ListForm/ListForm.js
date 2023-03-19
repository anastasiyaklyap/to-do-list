import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import styles from '../ColumnForm/ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addList({ title, description }));
		setTitle('');
		setDescription('');
	};

	return (
		<form
			className={styles.columnForm}
			onSubmit={handleSubmit}
		>
			<label>Title:</label>
			<TextInput
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label>Description:</label>
			<TextInput
				type='text'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<Button>Add column</Button>
		</form>
	);
};

export default ListForm;
