import React from 'react';
import styles from './list.module.css';

const List = ({ header, date, listOfItems }) => {
    return(
        <div className={`${styles['list']}`}>
            <div className={`${styles['list__header']}`}>
                <h2>{ header }</h2>
                <h4>Updated: { date }</h4>
            </div>

            <ul className={`${styles['list__body']}`}>
                {
                    listOfItems.map((item, indx) => <li key={indx}>{ item }</li>)
                }
            </ul>
        </div>
    )
}

List.defaultProps = {
    header: 'Default Header Title',
    date: 'No Date',
    listOfItems: []
}

export default List;