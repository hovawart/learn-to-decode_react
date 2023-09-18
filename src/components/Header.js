import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <img src={props.source} alt={props.alt} /> <h1>{props.text}</h1>
    </>
  );
}

export default Header;
