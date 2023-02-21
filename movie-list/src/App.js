import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Superheroes from "./components/Superhero";
import Trending from "./components/Trending";
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG ">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro section */}
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superheroes />
      </div>
    </div>
  );
}

export default App;
