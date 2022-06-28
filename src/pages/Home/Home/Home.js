import React from 'react';
import Products from '../../Products/Products';
import Banner from './Banner/Banner';
import ExpertOpinion from './ExpertOpinionSection/ExpertOpinion';
import ProceesSection from './ProceesSection/ProceesSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProceesSection></ProceesSection>
            <ExpertOpinion></ExpertOpinion>


        </div>
    );
};

export default Home;