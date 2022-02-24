import React from 'react';
import styles from './resume-page.module.css';


// react-router-dom
import { Link } from 'react-router-dom';

const ResumePage = () => {
    return(
        <div className={`${styles['resume-page']}`}>

            <div className={`${styles['resume-page__header']}`}>
                <h1 className={`${styles['resume-page__title']}`}>Adam Yi</h1>
                <h3>
                    Web Application Developer in Houston, TX
                </h3>
                <ul>
                    <li>
                        <span>Email</span> - adamyi@gmail.com
                    </li>
                    <li>
                        <span>Github</span> - <a target='_blank' className={`${styles['link']}`} href='https://github.com/adamyi515'>adamyi515</a>
                    </li>
                </ul>
            </div>
            <div className={`${styles['border-line']}`}></div>

            <div className={`${styles['resume-page__body']}`}>
            
    
            </div> {/** ./resume-page__body */}


        </div>
    )
}

export default ResumePage;