import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles";
import { Content } from "./Content";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowX: "auto",
        minHeight: "100vh",
        width: "full",
        maxWidth: "100vw",
        backgroundColor: "-webkit-linear-gradient(to right, #4b6cb7, #182848)",
        background: "linear-gradient(to right, #4b6cb7, #182848)",
        fontFamily: "serif",
      }}
    >
      <Particles options={particlesOptions as ISourceOptions} />
      <Content />
    </div>
  );
}

export default App;
