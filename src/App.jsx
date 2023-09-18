import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
    <div style={{ display: "flex", alignItems: 'center', padding: '5px', backgroundColor: "#e2e2e2", width: "100%", height: "10%", justifyContent: "center" }}>
      <img src="../textures/loky.png" style={{ width: "10%", height: "75%" }} />
    </div>
    <h3 style={{textAlign:"center", fontSize:"75%"}}>💫 Zoom in/out with mouse wheel and ove around your mouse/finger while pressing the mouse button/touchscreen to see the magic 💫</h3>
    <h4 style={{textAlign:"center", fontSize:"85%"}}>💡 Click on the tshirt boxes... Trust me! 💡</h4>
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <Experience />
    </Canvas>
    <h5>Made with React Three Fiber and {"<3"}</h5>
    </>
  );
}

export default App;
