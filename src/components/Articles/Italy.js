import React from 'react';
import Gallery from 'react-photo-gallery';
import './Article.css';

const photos = [
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821455-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821456-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821454-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821459-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821457-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821488-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447133-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821886-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889821885-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889822024-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889822023-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889822022-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3889822019-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447093-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447089-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447091-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447120-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447125-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447092-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447119-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896447144-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896449990-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896449991-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896451557-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896451588-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896451561-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896451559-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896451589-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896451560-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896453680-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455463-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455446-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455448-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455443-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455471-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455467-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455478-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455444-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455442-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455485-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896455493-5.jpg',
        width: 4,
        height: 6
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896458797-5.jpg',
        width: 6,
        height: 4
    },
    {
        src: 'https://samueljoy.zenfolio.com/img/s/v-10/p3896458798-5.jpg',
        width: 6,
        height: 4
    },
];

const Italy = props => (
    <div>
        <Gallery photos={photos} />
    </div>
);

export default Italy;