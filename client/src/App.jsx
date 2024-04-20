import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import HomePage from './pages/HomePage.jsx';
import CreateFood from './pages/CreateFoodPage.jsx';
import UpdatePage from './pages/UpdatePage';

const App = () => {
        return (
            <BrowserRouter>
                <Routes>
                
                    <Route path="/create" element={<CreateFood/>}/>
                    <Route path="/update/:id" element={<UpdatePage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

export default App;