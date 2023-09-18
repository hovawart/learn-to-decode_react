import logo from "./img/ltd-logo-horizontal.png";
import image from "./img/square-learntodecode.png";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App(props) {
  return (
    <>
      <Navbar />
      <Jumbotron>
        {/* <img src={logo} alt="logo" /> */}
        <Header source={logo} alt="Learn to Decode Logo" />
      </Jumbotron>
      <MainContent source={image} alt="Logo" />
    </>
  );
}

export default App;
