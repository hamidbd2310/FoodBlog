import React from 'react';
import MasterLayout from '../components/MasterLayout';
import FoodList from '../components/FoodList';


const HomePage = () => {
    return (
        <MasterLayout>
           <FoodList/>
        </MasterLayout>
    );
};

export default HomePage;