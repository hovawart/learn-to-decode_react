import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <h2 className={classes.navLogo}>Learn to Decode</h2>
      <div className={classes.navLink}>
        <a className={classes.navLink}>Home</a>
        <a className={classes.navLink}>Subjects</a>
        <a className={classes.navLink}>About</a>
        <a className={classes.navLink}>Resources</a>
      </div>
    </div>
  );
}

export default Navbar;
