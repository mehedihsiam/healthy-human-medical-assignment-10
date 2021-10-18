import React from 'react';
import Banner from '../../component/Banner/Banner';
import HomeDoctors from './HomeDoctors/HomeDoctors';
import HomeServices from './HomeServices/HomeServices';
import CovidUpdate from './CovidUpdate/CovidUpdate'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeDoctors></HomeDoctors>
            <HomeServices></HomeServices>
            <hr />
            <CovidUpdate></CovidUpdate>
        </div>
    );
};

export default Home;