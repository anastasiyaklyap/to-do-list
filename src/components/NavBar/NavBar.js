import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<Container>
				<div className={styles.container}>
					<Link to='/'>
						<FontAwesomeIcon
							icon={faBarsProgress}
							className={styles.icon}
						/>
					</Link>
					<ul className={styles.navigation}>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/'
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/favorite'
							>
								Favorite
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/about'
							>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
