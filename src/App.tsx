import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { DetailScreen } from "./modules/detail/DetailScreen";
import Home from "./modules/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "detail/:id",
      element: <DetailScreen />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
