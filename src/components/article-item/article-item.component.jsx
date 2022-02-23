import React from 'react';
import styles from './article-item.module.css';

const ArticleItem = ({ articleListItem: { title, date } }) => {
    return(
        <div className={`${styles['article-item']}`}>
            <p className={`${styles['article-item__title']}`}>{ title }</p>
            <p className={`${styles['article-item__date']}`}>{ date }</p>
        </div>
    )
}

export default ArticleItem;