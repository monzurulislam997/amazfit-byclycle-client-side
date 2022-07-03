import React from 'react';
import OnlineOrder from '../../OnlieOrder/OnlineOrder';
import Products from '../../Products/Products';
import Banner from './Banner/Banner';
import ExpertOpinion from './ExpertOpinionSection/ExpertOpinion';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Products></Products>
            <OnlineOrder></OnlineOrder>
            <ExpertOpinion></ExpertOpinion>


        </div>
    );
};

export default Home;