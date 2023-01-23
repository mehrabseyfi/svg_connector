import './App.css';
import { ReactComponent as DragonSVG } from "./components/statics/Dragon.svg";
import DrawSVG from "react-drawsvg";

function App() {
  return (
    <div className="App">
      <h1>Moz</h1>
      <DrawSVG
          startTransparent
          duration={10000}
          delay={3000}
          strokeColor="black"
          easingFunction="ease-in"
      >
        <DragonSVG />
      </DrawSVG>
    </div>
  );
}

export default App;
