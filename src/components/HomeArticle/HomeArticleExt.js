import React from 'react';
import './HomeArticle.css';

const HomeArticleExt = props => (
    <a href={props.destination} className="Home__Article" target="_blank" rel="noopener noreferrer">
        <img src={props.imgSrc} alt={props.imgAlt}></img>
        <div className="Home__Article__Text">
            {props.imgText}
        </div>
    </a>
);

export default HomeArticleExt;