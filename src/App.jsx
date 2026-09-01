import "./App.css";
import Login from "./pages/Login/Login.jsx";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <button>
        <Link to="/login">Login</Link>
      </button>

      {/* <Login /> */}
      {/* <Outlet /> */}
    </>
  );
}

export default App;
