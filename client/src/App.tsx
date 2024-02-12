import HowToPlay from "./App/Components/HowToPlay";
import "./styles.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HowToPlay />
      <Outlet />
    </>
  );
}

export default App;
