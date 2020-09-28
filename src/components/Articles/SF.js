import React from 'react';
import Gallery from 'react-photo-gallery';
import './Article.css';

const photos = [
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3557778374-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3557778400-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3557778376-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3557778398-5.jpg',
        width: 6,
        height: 4
    },
];

const SF = props => (
    <div>
        <Gallery photos={photos} />
    </div>
);

export default SF;