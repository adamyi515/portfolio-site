import React from 'react';
import styles from './resume.module.css';

// Component
import ResumeSection from '../resume-section/resume-section.component';

const Resume = (props) => {
    const {
        username, location, email, githubLink, githubName, linkedinLink, linkedinName, resumeSectionData
    } = props; 
    return(
        <div className={`${styles['resume']}`}>

            <div className={`${styles['resume__header']}`}>
                <h1>{ username }</h1>
                <h4>Web Application Developer in { location }</h4>
                <ul>
                    <li> <span>Email</span> - { email } </li>
                    <li> <span>Github</span> - <a target='_blank' className={`${styles['link']}`} href={githubLink}>{githubName}</a> </li>
                    <li> <span>Linkedin</span> - <a target='_blank' className={`${styles['link']}`} href={linkedinLink}>{linkedinName}</a> </li>
                </ul>
            </div>

            <div className={`${styles['resume__body']}`}>
                {resumeSectionData.map(sectionData => <ResumeSection  {...sectionData} /> )}
            </div>

        </div>
    )
}

Resume.defaultProps = {
    username: 'Default Name',
    location: 'No location',
    email: 'John.doe@mail.com',
    githubName: 'No githubname',
    githubLink: 'No githubLink',
    subtitle: 'Experience'
}

export default Resume;