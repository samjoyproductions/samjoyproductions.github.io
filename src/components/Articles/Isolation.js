import React from 'react';
import Gallery from 'react-photo-gallery';
import './Article.css';

const photos = [
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3879281974-5.jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3879281975-5.jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3879958818-5.jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3879281977-5.jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3886445009-5.jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3886445048-5.jpg',
        width: 5,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3886445015-5.jpg',
        width: 2,
        height: 2
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3886445041-5.jpg',
        width: 2,
        height: 1
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3886445058-5.jpg',
        width: 2,
        height: 2
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650210-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650213-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650383-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650467-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650412-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650803-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650501-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650938-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3997650963-5.jpg',
        width: 2,
        height: 2
    },    
];

const Isolation = props => (
    <div>
        <Gallery photos={photos} />
    </div>
    
);

export default Isolation;