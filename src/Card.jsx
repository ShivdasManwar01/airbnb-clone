import React from 'react';
function Card(){
    return(
        <>
            <div className="card">
                <div className="image">
                    <img src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720" alt="pic" />
                </div>
                <div className="place">
                    <p>Nashik, Pune</p>
                    <p></p>
                </div>
                <div className="info">
                    <p>150 kilometers away</p>
                    <p>5-10 Oct</p>

                </div>
                <div className="price">
                    <p>₹ 15000</p>
                    <p>night</p>

                </div>
            </div>
        </>
    )
}

export default Card;

