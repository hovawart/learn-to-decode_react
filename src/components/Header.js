import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes.wrapper}>
      <img className={classes.logoImg} src={props.source} alt={props.alt} />
    </div>
  );
}

export default Header;
