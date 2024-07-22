import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import PickCarCopy from "../components/PickCarCopy";
import FaresTable from "../components/FaresTable";

function Home({ cabs }) {
  return (
    <>
      <Navbar />
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCarCopy cabs={cabs} />
      <Banner />
      <PickCar cabs={cabs} />
      <FaresTable />
      <ChooseUs />

      {/* <Testimonials /> */}
      <Faq />
      {/* <Download /> */}
      <Footer />
    </>
  );
}

export default Home;
