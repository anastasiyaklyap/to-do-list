import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchQuery } from '../../redux/store';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateSearchQuery(query));
	};

	return (
		<form
			className={styles.SearchForm}
			onSubmit={submitHandler}
		>
			<TextInput
				placeholder='Search...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;
