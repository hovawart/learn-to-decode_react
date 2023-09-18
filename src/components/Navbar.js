import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <h2 className={classes.navLogo}>Learn to Decode</h2>
      <div className={classes.navLinks}>
        <a>Home</a>
        <a>Subjects</a>
        <a>About</a>
      </div>
    </div>
  );
}

export default Navbar;
