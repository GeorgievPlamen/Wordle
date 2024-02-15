import HowToPlay from "../../Features/HowToPlay/HowToPlay";
import Statistics from "../../Features/Statistics/Statistics";
import "../../styles.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Statistics />
      <HowToPlay />
      <Outlet />
    </>
  );
}

export default App;
