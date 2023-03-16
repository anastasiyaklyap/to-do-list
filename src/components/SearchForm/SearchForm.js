import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchQuery, getQuery } from '../../redux/store';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const queryStored = useSelector(getQuery);
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(updateSearchQuery(query));
	};

	useEffect(() => {
		setQuery(queryStored);
	}, [queryStored]);

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
