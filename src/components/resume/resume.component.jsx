import React from 'react';
import styles from './resume.module.css';

// Component
import ResumeSection from '../resume-section/resume-section.component';

const Resume = ({ resumeSectionData }) => {
    const {
        jobs, skillSet, educations
    } = resumeSectionData;
    const { list } = skillSet;

    return(
        <div className={`${styles['resume']}`}>
            {/* Job/experience section */}
            <h2 className={`${styles['resume-title']}`}>Experience</h2>
            <div className={`${styles['border-line']}`}></div>
            {
                jobs.map((job) => {
                    const {
                        position, company, jobDateRange,
                        responsibilities, 
                    } = job;
                    return(
                        <>
                             <div className={`${styles['resume__container']}`}>
                                <h3 className={`${styles['resume-position']}`}>{ position }</h3>
                                <p > { jobDateRange }</p>
                            </div>
                            <p className={`${styles['resume-text']}`}>{ company }</p>
                            <ul>
                                {responsibilities.map((item) => (
                                    <li>{ item }</li>
                                ))}
                            </ul>
                        </>
                    )
                })
            }
            {/* Skills section */}
            <h2 className={`${styles['resume-title']}`}>Skills</h2>
            <div className={`${styles['border-line']}`}></div>
            {
                list.map((skill) => (
                    <ul>
                       <li>{ skill }</li>
                    </ul>
                ))
            }


            {/* Education section */}
            <h2 className={`${styles['resume-title']}`}>Education</h2>
            <div className={`${styles['border-line']}`}></div>
            {
                educations.map((education) => {
                    const { degree, school, schooDateRange } = education;
                    return(
                        <>
                            <div className={`${styles['resume__container']}`}>
                                <h3 className={`${styles['resume-position']}`}>{ degree }</h3>
                                <p> { schooDateRange }</p>
                            </div>
                            <p className={`${styles['resume-text']}`}>{ school }</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Resume;