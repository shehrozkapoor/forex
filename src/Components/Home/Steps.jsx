import React from 'react';
import oneImg from './../../assets/Home/1.png';
import twoImg from './../../assets/Home/2.png';
import threeImg from './../../assets/Home/3.png';
import arrowImg from './../../assets/Home/arrow.svg';
import arrowDowmImg from './../../assets/Home/arrowDown.svg';

function Steps() {
    return (
        <div className="steps" style={{textAlign:'center',padding:'40px'}}>
            <h1>Steps for opening a No Name 1 Trading Profile</h1>
            <div className="container-fluid" style={{marginTop:'70px'}}>
            <div className="row">
            <div className="container-fluid col-6">
                <div className="row col-12 justify-content-center">
                <img src={oneImg} alt="" style={{height:'100px',padding:'0px 10px'}} className="col-1"/>
                <h3 className="col-5">Pick the account types depending on your objectives and needs <br /><span className="span-tag">Three available account types are supplemented with lots of additional features that bring some extra pluses to the investor. You can easily sign up for any of them. And keep the notice that you can change the account type after putting money on your acc.</span></h3>
                <img src={arrowImg} alt="" className="col-5" style={{position:'relative',left:'160px',top:'-100px'}}/>
                </div>
            </div>
            <div className="container-fluid col-6">
                <div className="row col-12 justify-content-center">
                <img src={twoImg} alt="" style={{height:'100px',padding:'0px 10px'}} className="col-1"/>
                <h3 className="col-5">You just need to complete information profile with your personal data and to provide some identity papers.<br /><span className="span-tag">You just need to complete information profile with your personal data and to provide some identity papers.</span></h3>
                <div className="row">
                <img src={arrowDowmImg} alt="" className="col-4"/>
                </div>
                </div>
            </div>
            <div className="container-fluid col-6">
                <div className="row col-12 justify-content-center">
                <img src={threeImg} alt="" style={{height:'100px',padding:'0px 10px'}} className="col-1"/>
                <h3 className="col-5">Depositing money into your account<br /><span className="span-tag">Once we approve and authorize your application, you will be able to make your payments and withdrawals swiftly.</span></h3>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Steps
