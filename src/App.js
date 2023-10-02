import "./App.css";

import Card from "./Card";
import data from "./data.json";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  const { destinations } = data;

  return (
    <>
      <Navbar />

      <div className="body">
        {destinations.map((destination) => (
          <Card location={destination} />
        ))}
      </div>
      <Login/>
    </>
  );
}

export default App;
