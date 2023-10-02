import React from "react";
function Login(){
    return(
        <>
            <div className="login">
            <div className="heading">
                <p>&#x2716;</p>
                <p>Log in or sign up</p>
            </div>
            <hr></hr>
            <div className="welcome">
                <h1>Welcome to Airbnb</h1>
                <input type="text" placeholder="Select Country"/>
                <input type="number" placeholder="Phone No"/>
                <p>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                <button type="submit">Continue</button>
                <hr />
                <button type="submit">Continue with Facebook</button>
                <button type="submit">Continue with Google</button>
                <button type="submit">Continue with Apple</button>
                <button type="submit">Continue with email</button>
                

            </div>

            </div>
            
        </>
    )
}

export default Login;