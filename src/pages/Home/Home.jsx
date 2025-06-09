import React from 'react';
import Banner from '../Banner/Banner';
import NewsLetter from '../../Components/Newsletter/NewsLetter';
import FeatureSection from '../Feature/FeatureSection';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <FeatureSection/>
            <NewsLetter/>
        </div>
    );
};

export default Home;