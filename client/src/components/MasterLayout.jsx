import React from 'react';
import AppNavBar from "./AppNavBar.jsx";
import {Toaster} from "react-hot-toast";
import Sidebar from '../components/Sidebar'

const MasterLayout = (props) => {
    return (
        <div className="bg-white">
            <AppNavBar/>
            <Sidebar/>
            {props.children}
            <Toaster position="bottom-center"/>
    
        </div>
    );
};
export default MasterLayout;