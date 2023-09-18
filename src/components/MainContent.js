import classes from "./MainContent.module.css";
function MainContent(props) {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.textcolumn}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={classes.imagecolumn}>
          <img
            className={classes.responsive}
            src={props.source}
            alt={props.alt}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
