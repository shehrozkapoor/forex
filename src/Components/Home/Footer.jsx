import React from 'react'
import { Button } from 'react-bootstrap';
import footerImg from './../../assets/Home/footer.png';

function Footer() {
return (
<div className="footer">
    <div className="footer-blue-box">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <div className="row footer-btn-row">
                        <Button className="button footer-btn" style={{width:'200px',minWidth:'auto',margin:'10px'}}>LOG IN</Button>
                    </div>
                    <div className="row footer-btn-row">
                        <Button className="button footer-btn" style={{width:'200px',minWidth:'auto',margin:'10px'}}>OPEN
                            ACCOUNT</Button>
                    </div>
                    <div className="col-lg-12 col-md-12 row fast-links">
                        <h4 className="col-12">Fast Links</h4>
                        <a href="" className="col-lg-6 col-md-12">About Us</a>
                        <a href="" className="col-lg-6 col-md-12">Platforms</a>
                        <a href="" className="col-lg-6 col-md-12">Contact US</a>
                        <a href="" className="col-lg-6 col-md-12">Resources</a>
                        <a href="" className="col-lg-6 col-md-12">Accounts Types</a>
                    </div>
                </div>

                <div className="col-lg-7 col-md-12">
                    <h1>RISK WARNING:</h1>
                    <p>Trading in Forex and CFDs carries a high level of risk and can result in the loss of part or all of your investment. Trading in Forex and CFDs may not be appropriate for all investors. You should be aware of all the risks associated with Forex and CFD trading and seek for independent advice. Past performance does not constitute a reliable indication of future results. Forecasts for the future do not constitute a reliable indicator of future performance. Copyright for the pages and for the screens displaying the pages, and for the information, material and their arrangement, is owned by No name 1  all rights reserved.</p>
                    <br />
                    <p>This information is intended for investors outside the United States who are not US/Japanese citizens and residents. This website is intended for informational purposes only. This website is not directed at any jurisdiction and is not intended for any use that would be contrary to local law or regulation. The products described on this are not offered and may not be sold in the United States/Japan or to US/Japanese citizens and residents.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 all-right">
    <p>© 2021 ALL right reserved No Name 1</p>
    </div>
</div>
)
}

export default Footer
