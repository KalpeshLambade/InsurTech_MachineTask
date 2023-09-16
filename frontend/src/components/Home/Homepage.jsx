import React from "react";
import { HomeNavbar } from "./HomeNav";
import { Main } from "../Main";

const Homepage = () => {
  return (
    <>
      <main
        className="border-black  lg:w-[81%] h-30 absolute 
      md:w-[69%] h-30 md:top-20 md:right-0
      top-16 w-full
      "
      >
        <HomeNavbar/>
        <Main/>
      </main>
    </>
  );
};

export default Homepage;
