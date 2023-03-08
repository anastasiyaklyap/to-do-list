import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = ({ action }) => {
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		action({ title, icon });
		setTitle('');
		setIcon('');
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
			<label>Icon:</label>
			<TextInput
				type='text'
				value={icon}
				onChange={(e) => setIcon(e.target.value)}
			/>
			<Button>Add column</Button>
		</form>
	);
};

export default ColumnForm;
