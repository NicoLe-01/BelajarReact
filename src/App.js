import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
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
    </div>
  );
}

export default App;
