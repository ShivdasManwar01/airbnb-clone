import React from 'react';
import { useState } from 'react';





function Card({location}){
   // const {Address,img,distance,price,time, duration}=location;
    const [pic, setPic]=useState("https://clipart-library.com/new_gallery/929031_white-heart-outline-png.png")
    function changePic(){
        if(pic==="https://clipart-library.com/new_gallery/929031_white-heart-outline-png.png"){
            setPic("https://freepngimg.com/thumb/heart/36734-5-pink-heart-transparent-background.png")
        }
        else{
            setPic("https://clipart-library.com/new_gallery/929031_white-heart-outline-png.png")
        }
    }
    return(
        <>
            <div className="card">
                <div className="image">
                    <img src={location.img} alt="pic" />
                    <img onClick={changePic} className="icon" src={pic} alt='heart'/>
                    {/* https://freepngimg.com/thumb/heart/36734-5-pink-heart-transparent-background.png */}
                </div>
                <div className="place">
                    <p>{location.Address}</p>
                    <div className="placerating">
                    <p>&#9733;</p>
                    <p>4.3</p>
                    </div>
                    
                </div>
                <div className="info">
                    <p>{location.distance}</p>
                    <p>{location.duration}</p>

                </div>
                <div className="price">
                    <p id='price'>{location.price}</p>
                    <p>{location.time}</p>

                </div>
            </div>
            
        </>
    )
}


export default Card;

