import React from 'react';
import styles from './resume-section.module.css';

const ResumeSection = (props) => {
    const {
        jobs, skillSet, educations
    } = props;


    return(
        <div className={`${styles['resume-section']}`}>

            

            {/* {subtitle ? <>
                <h2 className={`${styles['resume-section__subtitle']}`}>{ subtitle }</h2>
                <div className={`${styles['border-line']}`}></div>
            </> : null}
            
            {position ? <>
                <div className={`${styles['resume-section__position-container']}`}>
                    <h3 className={`${styles['resume-section--position']}`}>{ position }</h3>
                    <p>{ dateRange }</p>
                </div>
                <p>{ company }</p>
            </>: null}

            {list ? <>
                <ul>
                    {
                    list.map(item => <li>{ item }</li>)
                    }
                </ul>
            </>: null} */}
            
        </div>
    )
}


export default ResumeSection;