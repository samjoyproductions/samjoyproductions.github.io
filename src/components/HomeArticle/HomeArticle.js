import React from 'react';
import { Link } from 'react-router-dom';
import './HomeArticle.css';

const HomeArticleExt = props => (
    <Link to={props.destination} className="Home__Article">
        <img src={props.imgSrc} alt={props.imgAlt}></img>
        <div className="Home__Article__Text">
            {props.imgText}
        </div>
    </Link>
);

export default HomeArticleExt;