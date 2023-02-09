import React,{Component} from "react";

import Navbar from "./component/Navbar.jsx";
import Banner from "./component/Banner.jsx";
import Cards from "./component/Cards.jsx";
import Search from "./component/Search.jsx";
import Logo from "./component/Logo.jsx";
import Footer from "./component/Footer.jsx";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Cards/>
        <Search/>
        <Logo/>
        <Footer/>
      </div>
    )
  }
}

export default App;
