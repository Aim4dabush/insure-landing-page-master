import "./App.css";

//components
import Advertisements from "./Components/Advertisements/Advertisements";
import Footer from "./Components/Footer/Footer";
import HowWeWork from "./Components/HowWeWork/HowWeWork";
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
      <div className="desktop">
        <img
          src={
            process.env.PUBLIC_URL + "/Images/Desktop/image-intro-desktop.jpg"
          }
          alt="desktop"
        />
      </div>
      <Intro />
      <Advertisements />
      <HowWeWork />
      <Footer />
    </div>
  );
}

export default App;
