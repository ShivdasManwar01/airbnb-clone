import "./App.css";
import logo from "./images/globalicon.png";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="nav">
        <div className="navlogo">
          <div className="logo">
            <a href="#">
              <img
                src="https://iconape.com/wp-content/files/hk/370521/svg/airbnb-logo-icon-png-svg.png"
                alt="airbnb"
              />
            </a>
            <h3>airbnb</h3>
          </div>
        </div>

        <div className="search">
          <div className="anywhere">
            <a href="#">Anywhere</a>
          </div>
          <div className="seperator"></div>
          <div className="anyweek">
            <a href="#">Any week</a>
          </div>
          <div className="seperator"></div>
          <div className="addguest">
            <a href="#">Add guest</a>
          </div>
        </div>
        <div className="profile">
          <div className="airbnbhome">
            <a href="#">Airbnb your home</a>
          </div>
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="profileinfo">
            <a href="#">
              <img
                src="https://th.bing.com/th/id/OIP.BcaTHkxNfZVu0Xg3RzJhKQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="tools"
              />
            </a>
            <a id="pic" href="#">
              <img
                src="https://th.bing.com/th/id/OIP.OlnxO753VRgHKDLLDzCKoAHaHw?w=188&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="profilepic"
              />
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <Card/>
    </>
  );
}

export default App;
