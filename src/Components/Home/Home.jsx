import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BackgroundImage from './BackgroundImage';
import Cards from './Cards';
import Businessman from './Businessman';
import Stocks from './Stocks';
import Women from './Women';
import TradeUs from './TradeUs';
import Steps from './Steps';
import Footer from './Footer';



function Home() {
return (
<>
    <BackgroundImage></BackgroundImage>
    <div className="container-fluid">
    <div className="row">
    <Cards ></Cards>
    <Businessman></Businessman>
    </div>
    </div>
    <Stocks></Stocks>
    <Women></Women>
    <TradeUs></TradeUs>
    <Steps></Steps>
    <Footer></Footer>
</>
)
}

export default Home
