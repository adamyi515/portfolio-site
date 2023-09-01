import React from 'react';
import styles from './about-page.module.css';

// Components
import List from '../components/list/list.component';

// react-router-dom
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return(
        <div className={`${styles['about-page']}`}>

            <div className={`${styles['about-page__header']}`}>
                <h1 className={`${styles['about-page__title']}`}>About Me</h1>
                <h3>
                    A Full stack | ServiceNow developer, a gamer enthusiast and someone who likes to run around the block sometimes.
                    A healthy body is a healthy mind. 
                </h3>
            </div>
            <div className={`${styles['border-line']}`}></div>

            <div className={`${styles['about-page__body']}`}>
                <p>
                    Hey there, the name is Adam. I'm a fullstack/servicenow developer that worked in San Antonio and recently moved
                    back to my home town here in Houston TX. I used to work as a ServiceNow Developer/Consultant for the U.S. Government 
                    as a contractor at my previous company: <a href='https://www.accenture.com/us-en/industries/afs-index' 
                        className={`${styles['link']}`}>Accenture Federal Services</a>. After
                    working there for more than 4 years, I decided to leave to pursue and expand my knowledge in other technical fields in software development.
                </p>
                <p>
                    If ysa want to learn more about my background and experience, take a quick look at my resume at the top of the page!
                </p>
            </div> {/** ./about-page__body */}

        
            <List header={`What I'm doing now`} date={`November 17, 2022`} listOfItems={[
              `Reading "Can't Hurt Me" by David Goggins`,
              `Watching some Udemy Videos on Music Theory`,
              `Following an Exercise Routine (Basic Calisthenics) - 4 days a week`,
              `Trying to learn Unity Game Engine --- It's tough!`
            ]} />


        </div>
    )
}

export default AboutPage;