import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Navbar.Brand className="logo">
          <h1>
            <span>Tours</span>
          </h1>
        </Navbar.Brand>

        <Navbar.Text className="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/city/:id"}>City</Link>
        </Navbar.Text>
      </Navbar>
    </>
  );
}

export default NavBar;
