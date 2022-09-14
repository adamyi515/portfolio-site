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
                    Hey there, the name is Adam. I'm a Web Application Developer that worked in San Antonio and recently moved
                    back to my home town here in Houston TX. I used to work as a ServiceNow Developer/Consultant for the U.S. Government 
                    as a contractor at my previous company: <a href='https://www.accenture.com/us-en/industries/afs-index' 
                        className={`${styles['link']}`}>Accenture Federal Services</a>. After
                    working there for more than 4 years, I decided to leave and pursue my career in Frontend/Fullstack Development. 
                </p>
                <p>
                    Why you ask? Long story short: <span className={`${styles['text-hightlight']}`}>Life is short! </span> 
                </p>
                <p>
                    After contemplating whether I wanted to stay here and keep specializing in ServiceNow I asked the long
                    awaited question to myself: "Are I satisfied where I'm at in my life?" 
                </p>
                <p>
                    The short answer was <i>Maybe.</i> But deep down inside I knew I wanted to do something different. So I had a long conversation with myself 
                    and eventually an answer brewed within the depths of my heart. When I was working on a project for the Department of Interior,
                    I had a chance to do some frontend development. Right there and then it piqued my curiosity and I wanted to learn more. 
                    So I taught myself. HTML, CSS and JavaScript was something that I've already known for quite some time but I needed to learn a framework
                    or library to step up my game and so I chose React. But unfortunately the opportunity never arrived and I was stuck using a platform that
                    would not get me where I wanted to be. And so I decided it was time for me to make a change. It was time to pursue my career as a fullstack
                    web developer.
                </p>
                <p>
                    So stay awhile and listen... or just check out some random <Link className={`${styles['link']}`} to='/blog'><i>Talks</i></Link> (currently
                    a work in progress). You can also check out some of my <Link className={`${styles['link']}`} to='/projects'>React Projects</Link> I've created so far. 
                </p>
            </div> {/** ./about-page__body */}


        
            <List header={`What I'm doing now`} date={`August 10, 2022`} listOfItems={[
              `Reading "Can't Hurt Me" by David Goggins`,
              `Watching some Udemy Videos on Music Theory`,
              `Following an Exercise Routine (Basic Calisthenics) - 4 days a week`,
              `Trying to learn Unity Game Engine --- It's tough!`
            ]} />


        </div>
    )
}

export default AboutPage;