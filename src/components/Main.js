import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

export default function Main() {
  return(
    <main className="main-wrapper">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}