import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../../Features/Home/Home";
import Game from "../../Features/Game/Game";
import Login from "../../Features/Account/Login";
import Register from "../../Features/Account/Register";
import LoginTest from "../../Features/Account/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Index", element: <Home /> },
      { path: "Game", element: <Game /> },
      { path: "login", element: <Login /> },
      { path: "loginTest", element: <LoginTest /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
