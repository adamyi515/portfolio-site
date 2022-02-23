import React from 'react';
import styles from './home-page.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div className={`${styles['home-page']}`}>
            <div className={`${styles['home-page__profile-section']}`}>

                <div className={`${styles['home-page__intro-text']}`}>
                    <h1 className={`${styles['text-subtitle']}`}>Hey, the name's Adam Yi</h1>
                    <p className={`${styles['text-body']}`}>
                        I'm a Software/Web application developer in Houston TX that specializes in JavaScript. I used to work as a contractor
                        for various government agencies within the <a target='_blank' className={`${styles['text-highlight']}`} href='https://www.hhs.gov/'>Department of Health and Human Services</a>,{' '}
                        <a target='_blank' className={`${styles['text-highlight']}`} href='https://www.doi.gov/'>Department of the Interior</a> {' '}
                        and <a target='_blank' className={`${styles['text-highlight']}`} href='https://www.defense.gov/'>U.S. Department of Defense</a>{' '}.
                    </p>
                    <p className={`${styles['text-body']}`}>
                        This website was created using basic HTML, CSS, Javascript and React. 
                        You can check out some of my other <Link className={`${styles['text-highlight']}`} to='/projects'>Projects here</Link>.
                    </p>
                    <Link className={`${styles['home-page--link']}`} to='/about'><i className="fa-solid fa-book"></i> More about me</Link>
                    <a className={`${styles['home-page--link']}`} href='' target='_blank' >
                        <i className="fa-brands fa-github-alt"></i> Check out my github</a>
                </div>  
                
                <div className={`${styles['home-page__image-profile']}`}>
                    <img className={`${styles['img']}`} src="https://i.postimg.cc/d3nSTwPH/adam-yi.jpg" alt="" />
                </div>

            </div>{/* ./END-home-page__profile-section */}

            


        </div>
    )
}

export default HomePage;