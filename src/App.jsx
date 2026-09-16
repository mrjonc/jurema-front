import "./App.css";
import Login from "./pages/Login-Register/Login.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
