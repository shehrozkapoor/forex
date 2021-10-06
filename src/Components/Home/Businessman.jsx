import React from 'react';
import businessman from './../../assets/Home/buinesman.png';

function Businessman() {
return (
<div id="oriented_div" className="container-fluid">
    <div className="row justify-content-center">
        <img src={businessman} alt="business-man-img" className="businessman-img col-lg-4"/>
        <div className="col-lg-6 business-img-p" >
            <p className="oriented-title ">A trade oriented broker</p>
            <p className="oriented-p">No Name 1 is a top online Forex broker with many years of experience in the
                market. No name 1 being a client-oriented company, places the needs of every one of our customers as
                its own priority. We are committed to providing all our investors a wide range of options when
                trading to help them become better at trading and also make profits.</p>
            <p className="oriented-p">At No name 1 we ensure all our clients are up to date with the market trends
                and also provide them with latest trading technology and Forex tools by investing continuously in
                innovations.</p>
            <p className="oriented-p">At No name 1 we ensure all our clients are up to date with the market trends
                and also provide them with latest trading technology and Forex tools by investing continuously in
                innovations.</p>
            <p className="oriented-p">At No name 1 we ensure all our clients are up to date with the market trends
                and also provide them with latest trading technology and Forex tools by investing continuously in
                innovations.</p>
            <p className="oriented-p">At No name 1 we ensure all our clients are up to date with the market trends
                and also provide them with latest trading technology and Forex tools by investing continuously in
                innovations.</p>
        </div>
        <p className="oriented-p col-10" style={{marginTop:'40px'}}>All our trusted clients have a 24/7 access to
            our various comprehensive educational materials. These materials help trader’s understand and learn more
            about the various online operations, trading and the global market in general. We have a great customer
            support team which is always and readily available to assist with any issue you might encounter or
            challenge you might face in the course of trading.At No name 1 we place high importance and emphasis on
            customer satisfaction, and we are dedicated to being more than just an online broker to our clients.
            Make your trading experience worth it, choose a right broker, and choose No name 1!</p>
    </div>
</div>
)
}

export default Businessman
