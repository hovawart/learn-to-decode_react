import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div class={classes.navbar}>
      <a>Home</a>
      <a>Subjects</a>
      <a>About</a>
    </div>
  );
}

export default Navbar;
