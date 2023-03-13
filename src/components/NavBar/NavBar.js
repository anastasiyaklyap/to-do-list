import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<Container>
				<div className={styles.container}>
					<a href='/'>
					<FontAwesomeIcon icon={faBarsProgress} className={styles.icon}/>
					</a>
					<ul className={styles.navigation}>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/favorite'>Favorite</a>
						</li>
						<li>
							<a href='/about'>About</a>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
