import React from 'react';
import styles from './article-list.module.css';

// Components
import ArticleItem from '../article-item/article-item.component';

// Local Data (When MongoDB is implemented, this data file will not exist)
import articleListData from '../../data/article.list.data';


const ArticleList = ({ titleList, styleObj: { titleColor, textColor, hoverColor } }) => {
    return(
        <div className={`${styles['article-list']}`}>
            <div className={`${styles['article-list__header']}`}>
                <h1 style={{ color: titleColor }}>{ titleList }</h1>
            </div>
            <div className={`${styles['border-line']}`}></div>
            {
                articleListData.map(articleListItem => <ArticleItem key={articleListItem.id} articleListItem={articleListItem}/>)
            }
        </div>
    )
}

ArticleList.defaultProps = {
    titleList: 'Default List',
    styleObj: {
        titleColor: '#FDE74C',
        textColor: '#fff',
        hoverColor: 'red'
    }
};

export default ArticleList;