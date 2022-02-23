import React from 'react';
import styles from './project-list.module.css';

// Component
import ProjectItem from '../project-item/project-item.component';

const ProjectList = () => {
    return(
        <div className={`${styles['project-list']}`}>
            <ProjectItem projectTitle='Github Finder' img='https://i.postimg.cc/CxWkKYVY/github-finder.jpg' 
                source='https://github.com/adamyi515/react-github-finder' demo='https://projekt2501-github-finder.netlify.app/' 
                info='React application to find github users using Github API' />
                <ProjectItem projectTitle='Github Finder' img='https://i.postimg.cc/CxWkKYVY/github-finder.jpg' 
                source='https://github.com/adamyi515/react-github-finder' demo='https://projekt2501-github-finder.netlify.app/' 
                info='React application to find github users using Github API' />
                <ProjectItem projectTitle='Github Finder' img='https://i.postimg.cc/CxWkKYVY/github-finder.jpg' 
                source='https://github.com/adamyi515/react-github-finder' demo='https://projekt2501-github-finder.netlify.app/' 
                info='React application to find github users using Github API' />
                <ProjectItem projectTitle='Github Finder' img='https://i.postimg.cc/CxWkKYVY/github-finder.jpg' 
                source='https://github.com/adamyi515/react-github-finder' demo='https://projekt2501-github-finder.netlify.app/' 
                info='React application to find github users using Github API' />
        </div>
    )
}

export default ProjectList;