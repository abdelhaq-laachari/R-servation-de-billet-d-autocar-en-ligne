import React from "react";
import NavBar from "../components/navBar/NavBar";
import SearchBox from "../components/Search/SearchBox";
import Background from "../components/video/Background";
import DatePicker from "../components/datePicker/DatePicker";
import "../styles/Home.css";
import Card from "../components/cards/Card";
import Image1 from "../assets/svg/image1.svg";
import Image2 from "../assets/svg/image2.svg";
import Image3 from "../assets/svg/image3.svg";
import MuiCard from "../components/cards/MuiCard";
import Mar from "../assets/img/mar.jpg";
import Casa from "../assets/img/casa.jpg";
import Rabat from "../assets/img/rab2.jpg";
import Footer from "../components/footer/footer"

const Home = () => {
  return (
    <>
      <Background />
      <section className="section1">
        <div className="main">
          <NavBar />
          <h1 className="absolute md:top-60 top-52 text-center text-2xl md:text-center text-white md:text-3xl">
            Join{" "}
            <span className="md:text-3xl font-serif bold text-red-300 ">
              Supr@tours
            </span>{" "}
            to explore the best locations in{" "}
            <span className="md:text-3xl font-serif bold text-red-300 ">
              Morocco
            </span>
            .
          </h1>
          <form className="absolute md:top-2/4 top-1/3 flex justify-center bg-white p-3 items-center w-10/12 rounded-md shadow-lg ">
            <div className="flex md:w-full items-center flex-wrap mx-3 p-2 justify-center">
              <div className="w-full z-20 md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  From
                </label>
                <SearchBox />
              </div>
              <div className="w-full z-10 md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  From
                </label>
                <SearchBox />
              </div>
              <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0">
                <DatePicker />
              </div>
              <button className="bg-red-400 hover:bg-red-500 text-white w-full md:max-w-max font-bold py-2 px-4 rounded-full">
                Find Ticket
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="flex flex-col bg-gray-50 items-center md:pt-7 md:space-y-8 md:h-screen ">
        <div className="divide-y-4 text-3xl text-black font-bold text-center pt-5">
          <h1 className="">
            Get your ticket <span className="text-red-400">fast</span> and{" "}
            <span className="text-red-400">anywhere</span>.
          </h1>
        </div>
        <hr className="my-8 w-1/2 justify-center h-px bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <p className="text-center text-base md:text-xl font-medium ">
          You can search all of Morocco's destinations with Supr@Tours <br />
          thanks to its more than 100 trips, <br /> so you'll never get lost.
        </p>
        <div className="flex flex-col w-11/12 md:flex-row md:justify-center md:space-x-6">
          <Card src={Image1} msg="Book your bus ticket easily" />
          <Card src={Image2} msg="Find your next destination" />
          <Card src={Image3} msg="We're here for you 24/7" />
        </div>
        <div className="flex flex-col items-center p-6">
          <h1 className="text-2xl font-semibold md:mt-8 md:text-3xl ">
            Our most popular routes
          </h1>
          <p className="font-thin text-center md:text-xl md:mt-5">
            Visit our most popular route by booking your ticket online with{" "}
            <span className="md:text-xl font-serif bold text-red-300 ">
              Supr@tours
            </span>
          </p>
        </div>
      </section>
      <section className="md:h-screen px-6 bg-slate-100">
        <div className="w-full flex flex-col items-center space-y-8 md:h-screen md:space-y-0 md:flex-row md:w-full md:justify-around md:items-center ">
          <MuiCard
            src={Mar}
            city="Marrakech"
            about="Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire."
          />
          <MuiCard
            src={Rabat}
            city="Casablanca"
            about="Rabat, Morocco's capital, rests along the shores of the Bouregreg River and the Atlantic Ocean. It's known for landmarks that speak to its Islamic and French-colonial heritage, including the Kasbah of the Udayas"
          />
          <MuiCard
            src={Casa}
            city="Rabat"
            about="Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco"
          />
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
};

export default Home;
