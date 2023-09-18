import logo from "./img/ltd-logo-horizontal.png";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";

function App(props) {
  return (
    <>
      <Navbar />
      <Jumbotron>
        {/* <img src={logo} alt="logo" /> */}
        <Header source={logo} alt="Learn to Decode Logo" />
      </Jumbotron>
    </>
  );
}

export default App;
