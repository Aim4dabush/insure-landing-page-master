import "./App.css";

//components
import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mobile">
        <img
          src={process.env.PUBLIC_URL + "/Images/Mobile/image-intro-mobile.jpg"}
          alt="mobile"
        />
      </div>
      <Intro />
    </div>
  );
}

export default App;
