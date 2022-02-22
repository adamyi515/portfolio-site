import React from 'react';
import styles from './navbar.module.css';

// React-router-dom
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={`${styles['navbar']}`} >

            <div className={`container ${styles['navbar__container']}`}>

                <div className={`${styles['navbar__brand']}`}>
                    <Link className={`${styles['navbar__link']}`} to='/'>
                        <h3>Adam Yi</h3>
                    </Link>
                </div>

                <ul className={`${styles['navbar__links']}`}>
                    <li>
                        <Link className={`${styles['navbar__link']}`} to='/blog'>
                            <i className="fa-brands fa-rocketchat"></i> Talks
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles['navbar__link']}`} to='/projects'>
                            <i class="fa-solid fa-laptop-code"></i> Projects
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles['navbar__link']}`} to='/about'>
                            <i className="fa-solid fa-book"></i> About me
                        </Link>
                    </li>
                </ul>

                <ul className={`${styles['navbar__socials']}`}>
                    <li>
                        <a href="https://github.com/adamyi515" target='_blank' className={`${styles['navbar__social']}`}>
                            <i className="fa-brands fa-github-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adamyi515/" target='_blank' className={`${styles['navbar__social']}`}>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;