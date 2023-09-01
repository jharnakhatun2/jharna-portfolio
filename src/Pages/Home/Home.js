import React from "react";
import Hero from "./Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ContactMe from "../Contact/ContactMe";
import Reviews from "../Review/Reviews";
import useTitle from "../../Hook/useTitle";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
  useTitle("Home");
  return (
    <div>
      <ScrollToTop smooth style={{ backgroundColor: "#36065C" }} />
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Reviews></Reviews>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
