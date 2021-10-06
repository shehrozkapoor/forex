import React from 'react'
import StockCard from './StockCard';
import bell from './../../assets/Home/bell.svg';
import vector from './../../assets/Home/Vector.svg';
import screen from './../../assets/Home/screen.svg';
import stockrise from './../../assets/Home/stockrise.svg';
import setting from './../../assets/Home/settings.svg';
import person from './../../assets/Home/person.svg';
import page from './../../assets/Home/page.svg';
import box from './../../assets/Home/box.svg';
import stocks_img from './../../assets/Home/stocks.png';

function Stocks() {
    return (
        <div className="stocks">
            <div className="stocks-p container">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                <h1>Trade with us</h1>
                <p style={{paddingLeft:'80px'}}>No name 1 presents its clients with the optimal platform for investing in Forex, Futures and Commodities.We are committed to providing each and every client with the best experience possible and always aim to provide the necessary means and resources for successful trading.</p>
                <h2 style={{paddingLeft:'80px'}} className="name-provide">No name provides you with:</h2>
                </div>
                <img src={stocks_img} alt="stock-img" className="stock-img col-6"/>
                </div>
            </div>
            <div className="stock-cards d-flex flex-wrap" style={{margin:'0 auto',paddingBottom:'100px'}}>
            <div className="row justify-content-center" style={{margin:'0 auto'}}>
            <StockCard src={bell} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            <StockCard src={vector} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            <StockCard src={screen} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            <StockCard src={page} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            </div>
            <div className="row justify-content-center" style={{margin:'0 auto'}}>
            <StockCard src={stockrise} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            <StockCard src={setting} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            <StockCard src={person} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            <StockCard src={box} value="Timely reports and indicators, which let you follow how your trading develops with each signal, along with vital success strategies"></StockCard>
            </div>
            </div>
        </div>
    )
}

export default Stocks
