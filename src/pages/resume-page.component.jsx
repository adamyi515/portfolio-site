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
    return(
        <div className={`${styles['resume-page']}`}>

            <div className={`${styles['resume-page__header']}`}>
                <h1 className={`${styles['resume-page__title']}`}>Resume</h1>
            </div>

            <div className={`${styles['resume-page__resume']}`}>
                <Resume {...resumeUserData} resumeSectionData={resumeSectionData} />
            </div> {/** ./resume-page__resume */}

        </div>
    )
}

export default ResumePage;