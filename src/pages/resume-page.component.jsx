import React from 'react';
import styles from './resume-page.module.css';

// Component
import Resume from '../components/resume/resume.component';

// react-router-dom
import { Link } from 'react-router-dom';

// Local Resume Data
import { resumeUserData } from '../data/resume-user.data';
import { resumeSectionData } from '../data/resume-section.data';

const ResumePage = () => {
    const {
        username, location, email, githubLink, githubName, linkedinLink, linkedinName
    } = resumeUserData; 


    return(
        <div className={`${styles['resume-page']}`}>

            <div className={`${styles['resume-page__header']}`}>
                <h1 className={`${styles['resume-page__title']}`}>Resume</h1>
                <h1>{ username }</h1>
                <h4>Fullstack | ServiceNow Developer in { location }</h4>
                <ul className={`${styles['resume-page__list']}`}>
                    <li> <span>Email</span> - { email } </li>
                    <li> <span>Github</span> - <a target='_blank' className={`${styles['link']}`} href={githubLink}>{githubName}</a> </li>
                    <li> <span>Linkedin</span> - <a target='_blank' className={`${styles['link']}`} href={linkedinLink}>{linkedinName}</a> </li>
                </ul>
            </div>

            <div className={`${styles['resume-page__resume']}`}>
                <Resume resumeSectionData={resumeSectionData} />
            </div> {/** ./resume-page__resume */}

        </div>
    )
}

export default ResumePage;