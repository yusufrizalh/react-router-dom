import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Button,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// import semua halaman yg akan ditampilkan
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import ContactPage from "./pages/ContactPage.js";
import ChartPage from "./pages/ChartPage.js";

function App() {
  return (
    <Container>
      <div className="py-0 px-0">
        <Router>
          {/* membuat navbar */}
          <Navbar color="dark" dark fixed="top">
            <NavbarBrand href="/">
              <img
                alt="logo"
                src="https://cdn-icons-png.flaticon.com/512/2761/2761032.png"
                style={{
                  height: 40,
                  width: 40,
                }}
              />{" "}
              &nbsp; React Router
            </NavbarBrand>
            <Nav className="me-auto">
              <NavItem>
                <NavLink>
                  <Link to="/">
                    <button className="btn text-white">Home</button>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/about">
                    <button className="btn text-white">About</button>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/gallery">
                    <button className="btn text-white">Gallery</button>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/contact">
                    <button className="btn text-white">Contact</button>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/chart">
                    <button className="btn text-white">Chart</button>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          {/* semua routes harus didaftarkan disini */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/gallery" element={<GalleryPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/chart" element={<ChartPage />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
