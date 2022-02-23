import React from 'react';
import styles from './project-list.module.css';

// Project data
import {projectItems} from '../../data/project-item';

// Component
import ProjectItem from '../project-item/project-item.component';

const ProjectList = () => {
    return(
        <div className={`${styles['project-list']}`}>

            {
                projectItems.map(projectItem => <ProjectItem {...projectItem} />)
            }

        </div>
    )
}

export default ProjectList;