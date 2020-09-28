import React from 'react';
import HomeArticleExt from '../HomeArticle/HomeArticleExt';
import HomeArticle from '../HomeArticle/HomeArticle';
import './Home.css';
import img from "./nightcrawler.jpg";

const Home = props => (
    <div className="Home">
      <HomeArticleExt
        targetType="ext"
        destination="https://nightcrawlerzine.persona.co/"
        imgSrc={img}
        imgAlt="Nightcrawler Zine Volume I"
        imgText="Featured in Nightcrawler Zine Volume I"
      />
      <HomeArticle
        destination="/isolation"
        imgSrc="https://samueljoy.zenfolio.com/img/s/v-10/p3879281972-5.jpg"
        imgAlt="WPI school mascot, wearing a disposable mask"
        imgText="isolation: on individuality and identity in the time of covid-19"
      />
      <HomeArticleExt
        destination="https://pinkmalaise.bandcamp.com/album/second-thoughts"
        imgSrc="https://samueljoy.zenfolio.com/img/s/v-10/p3889822023-5.jpg"
        imgAlt="An empty table at a restaurant in Venice, Italy"
        imgText="pink malaise album cover comission - stream it here!"
      />
      <HomeArticle
        destination="/sf"
        imgSrc="https://samueljoy.zenfolio.com/img/s/v-10/p3557778398-5.jpg"
        imgAlt="The Golden Gate Bridge"
        imgText="san francisco on film, 2019 - coming soon!"
      />
      <HomeArticle
        destination="/italy"
        imgSrc="https://samueljoy.zenfolio.com/img/s/v-10/p3557738626-5.jpg"
        imgAlt="Il Duomo in Florence, Italy, at sunset"
        imgText="italy on film, 2018"
      />
      <HomeArticle
        destination="/wpi"
        imgSrc="https://samueljoy.zenfolio.com/img/s/v-10/p3840137140-5.jpg"
        imgAlt="Worcester Polytechnic Institute marching band trombonist, playing at an event"
        imgText="wpi event work 2017-2020 - coming soon!"
      />
    </div>
);

export default Home;