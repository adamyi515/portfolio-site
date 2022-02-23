import React from 'react';
import styles from './project-page.module.css';

// Components
import ProjectList from '../components/project-list/project-list.component';

const ProjectPage = () => {
    return(
        <div className={`${styles['project-page']}`}>
            <div className={`${styles['project-page__header']}`}>
                <h1 className={`${styles['project-page__title']}`}>Projects</h1>
                <h3>
                    A few highlights of my Projects and deployed to <a className={`${styles['link']}`} href='https://www.netlify.com/' 
                        target='_blank'>Netlify</a>. 
                    View the source code here on my <a href='https://github.com/adamyi515' className={`${styles['link']}`} 
                        target='_blank'>Github Page</a>
                </h3>
            </div>

            <div className={`${styles['border-line']}`}></div>
            
            <ProjectList />

        </div>
    )
}

export default ProjectPage;