import React from 'react';
import styles from './project-item.module.css';

const ProjectItem = ({ projectTitle, img, source, demo, info }) => {
    return(
        <div className={`${styles['project-item']}`}>
            <div className={`${styles['project-item__header']}`}>
                <h2>{ projectTitle }</h2>
                <img src={img} className={`${styles['img']}`}></img>
                <div className={`${styles['btn__container']}`}>
                    <a className={`${styles['btn']}`} target='_blank' href={source}>Source</a>
                    <a className={`${styles['btn']}`}  target='_blank' href={demo}>Demo</a>
                </div>
            </div>
            <div className={`${styles['project-item__body']}`}>
                <p>
                    { info.length > 70 ? info.substring(0, 70) + '...' : info }
                </p>
            </div>
        </div>
    )
}

ProjectItem.defaultProps = {
    projectTitle: 'Default Title',
    img: 'https://via.placeholder.com/150',
    source: '#',
    demo: '#',
    info: 'Default text'
}


export default ProjectItem;