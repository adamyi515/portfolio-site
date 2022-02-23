import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return(
        <footer className={`${styles['footer']}`}>
           <div className='container'>
               <div className={`${styles['footer__container']}`}>
                <p>Made by Adam Yi</p>
                <p>Website powered by React, React Router DOM and other tools</p>
               </div>
           </div>
        </footer>
    )
}

export default Footer;