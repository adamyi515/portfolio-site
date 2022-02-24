import React from 'react';
import styles from './blog-page.module.css';

const BlogPage = () => {
    return(
        <div className={`${styles['blog-page']}`}>
            <div className={`${styles['blog-page__header']}`}>
                <h1 className={`${styles['blog-page__title']}`}>Talks</h1>
                <h3>
                    This page is still <span className={`${styles['under-line']}`}>under development</span>. Once the database is implemented 
                    into this site, I'll post a few articles/thoughts here.
                </h3>
            </div>
        </div>
    )
}

export default BlogPage;