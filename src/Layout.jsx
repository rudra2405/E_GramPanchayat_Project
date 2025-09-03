import React from "react";
import NavbarApp from "./components/NavbarApp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Notice from "./components/Notice";
import Contact from "./components/Contact";

export default function Layout() {
  return (
    <>
      <NavbarApp></NavbarApp>
      <Home></Home>
      <Services></Services>
      <Notice></Notice>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
