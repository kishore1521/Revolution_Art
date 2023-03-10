import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import CardsWellsh from './components/Cards/CardsWellsh';
// import { HeroSec } from './components/Hero/Hero';
import Section from './components/Hero/Section';
//import Auth from './pages/Auth/Auth'
import Footer from './components/Footer/Footer';

const App = () => {
    
    return (
        <div>
            <BrowserRouter>
                <div className="relative dark:bg-main-dark-bg">
                    {/* below is Header */}
                    <div>
                        <Header />
                    </div>
                    <div>
                        {/* <HeroSec /> */}
                        <Section />
                        <CardsWellsh/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
        
    );
}

export default App;