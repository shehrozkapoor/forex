import React from 'react'


function StockCard(props) {
    return (
        <div className="stock-card col-lg-2 col-md-6 col-sm-6">
            <img src={props.src} />
            <p>{props.value}</p>
        </div>
    )
}

export default StockCard;
