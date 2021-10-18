import React from 'react';
import Banner from '../../component/Banner/Banner';
import HomeDoctors from './HomeDoctors/HomeDoctors';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeDoctors></HomeDoctors>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;