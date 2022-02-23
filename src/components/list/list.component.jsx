import React from 'react';
import styles from './list.module.css';

const List = ({ header, headerColor, headerSize }) => {
    return(
        <div className={`${styles['list']}`}>
            <div className={`${styles['list__header']}`}>
                { header }
            </div>

            <div className={`${styles['list__body']}`}>

            </div>
        </div>
    )
}

List.defaultProps = {
    header: 'Default Header Title',
    headerColor: 'Red',
    headerSize: '16px'
}

export default List;