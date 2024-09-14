import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarouse from "./CategoryCarouse";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";

const Home:React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarouse />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
