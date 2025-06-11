import React from 'react';
import Banner from '../Banner/Banner';
import NewsLetter from '../../Components/Newsletter/NewsLetter';
import FeatureSection from '../Feature/FeatureSection';
// import Gallery from '../Gallery/gallery';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <FeatureSection/>
            {/* <Gallery/> */}
            <NewsLetter/>
        </div>
    );
};

export default Home;