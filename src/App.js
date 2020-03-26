import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Departments from "./pages/Departments";

import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <NewsLetter />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/departments" component={Departments} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
