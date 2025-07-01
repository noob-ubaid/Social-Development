import React from 'react';
import Banner from '../Banner/Banner';
import NewsLetter from '../../Components/Newsletter/NewsLetter';
import FeatureSection from '../Feature/FeatureSection';
import Gallery from '../Gallery/Gallery';
import Faq from '../../Components/Faq/Faq';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <FeatureSection/>
            <Gallery/>
            <NewsLetter/>
            <Faq/>
        </div>
    );
};

export default Home;