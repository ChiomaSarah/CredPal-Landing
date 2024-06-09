import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Payments from "../components/Payments";
import Savings from "../components/Savings";
import VirtualCards from "../components/VirtualCards";
import CreditBuilder from "../components/CreditBuilder";
import Carousel from "../components/Carousel";
import CTA from "../components/CTA";
import DownloadStore from "../components/DownloadStore";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Payments />
      <Savings />
      <VirtualCards />
      <CreditBuilder />
      <Carousel />
      <CTA />
      <DownloadStore />
      <Footer />
    </>
  );
}

export default Home;
