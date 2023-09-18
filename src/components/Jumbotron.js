import classes from "./Jumbotron.module.css";

function Jumbotron(props) {
  return <div className={classes.jumbotron}>{props.children}</div>;
}

export default Jumbotron;
