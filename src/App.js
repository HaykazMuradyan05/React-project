import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
}
  from "react-router-dom"
import Menu from "./component/Menu/Menu";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import JokesPage from "./pages/JokesPage/JokesPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route exact path="/AboutPage" element={<AboutPage/>}/>
          <Route exact path="/Contact" element={<ContactPage/>}/>
          <Route exact path="/Jokes" element={<JokesPage/>}/>
          <Route exact path="/Register" element={<RegisterPage/>}/>
      </Routes>

    </Router>
  )
}
