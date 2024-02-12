import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Features/Home/Home";
import Game from "../../Features/Game/Game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Index", element: <Home /> },
      { path: "/Game", element: <Game /> },
    ],
  },
]);
