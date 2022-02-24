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
                    A Software/Web application developer, a gamer enthusiast and someone who likes to run around the block sometimes.
                    A healthy body is a healthy mind. 
                </h3>
            </div>
            <div className={`${styles['border-line']}`}></div>

            <div className={`${styles['about-page__body']}`}>
                <p>
                    Sup, the name's Adam. I'm a Web Application Developer that worked in San Antonio and recently moved
                    back to my home town here in Houston TX. I used to work as a ServiceNow Developer/Consultant for the U.S. Government 
                    as a contractor at my previous company: <a href='https://www.accenture.com/us-en/industries/afs-index' 
                        className={`${styles['link']}`}>Accenture Federal Services</a>. After
                    working there for more than 4 years, I decided to leave and pursue my career in Frontend/Mobile Development. 
                </p>
                <p>
                    Why you ask? Long story short: <span className={`${styles['text-hightlight']}`}>Life is short! </span> 
                </p>
                <p>
                    After contemplating whether I wanted to stay here and keep specializing in ServiceNow (no offense,
                    ServiceNow is an awesome cloud-based enterprise platform and I was blessed to be given an opportunity to learn it) I asked the long
                    awaited question to myself: "Are you satisfied where you are in life?" 
                </p>
                <p>
                    The short answer was <i>Maybe</i> but deep down inside I knew I wanted to do something different. So I looked into the mirror 
                    and had a long conversation with myself and eventually an answer brewed within the depths of my heart. When I worked on my 2nd
                    project at AFS, I had a glimps of what it was like to develop the frontend portion of our application. Right there and then
                    it piqued my curiosity but it never manifested into anything else other than "something to add to my list of skillsets as a Software
                    Developer."" And then time went by, and as stated above, I talked to myself. 
                </p>
                <p>
                    So stay awhile and listen... or just check out some random <Link className={`${styles['link']}`} to='/blog'><i>Talks</i></Link> (currently
                    a work in progress). You can also check out some of my <Link className={`${styles['link']}`} to='/projects'>React Projects</Link> I've created so far. 
                </p>
            </div> {/** ./about-page__body */}


            <List header={`What I'm doing now`} date={`February 23, 2022`} listOfItems={[
              `Reading "Can't Hurt Me" by David Goggins`,
              `Learning React and React Native --- Learning from zerotomastery.io, Great resource!. `,
              `Watching some Udemy Videos on Music Theory`,
              `Following an Exercise Routine - 4 days a week, 3 sets of (pullups, squats, pushups, core, dips)`,
              `Trying to learn Unity Game Engine --- It's tough!`
            ]} />


        </div>
    )
}

export default AboutPage;