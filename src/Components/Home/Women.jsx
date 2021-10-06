import React from 'react'
import womenImg from '../../assets/Home/women.png';
function Women() {
    return (
        <div className="women-section container-fluid">
            <div className="row justify-content-center" style={{margin:'60px 0px'}}>
                <div className="blue-div col-lg-5 col-md-12">
                    <div className="inner-div">
                    <p>For live assistance NO NAME1 Provides you with  24 hour support </p>
                    <button className="">Learn More</button>
                    </div>
                </div>
                <img src={womenImg} alt="women-img"  className="col-lg-6 col-md-12"/>
            </div>
        </div>
    )
}

export default Women
