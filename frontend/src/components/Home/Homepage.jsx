import React, { useEffect, useState } from "react";
import { HomeNavbar } from "./HomeNav";
import { Main } from "../Main";
import Sidebar from "../sidebar/Siderbar";
import { Delete } from "../Delete";

const Homepage = () => {
  const [browserWidth, setBrowserWidth] = useState();

  const [displayCont, setDisplayCont] = useState({delete:false, add:false, update:false});
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    setBrowserWidth(window.innerWidth || document.documentElement.clientWidth);
  }, [browserWidth]);

  // console.log(displayCont, "displayCont");

  return (
    <>
      <main className="border-black h-30 justify-between md:w-full h-30 md:top-20 md:right-0 top-16 w-full fixed flex flex-col md:flex-row">

        <section className="lg:w-[18%] md:w-[28%] h-[calc(100vh-2rem)] hidden md:flex"> 
          {browserWidth >700 && <Sidebar/> }
        </section>

        <section className="lg:w-[82%] md:w-[72%] flex flex-col">
          <HomeNavbar/>
          <Main isDelete={(e)=> {

            setDisplayCont({...displayCont, ["delete"]:true});

            // console.log(e);
            setTempData(e.taskId);


          }}/>
        </section>
      </main>

      {displayCont?.delete && <Delete isDelete={()=> setDisplayCont({...displayCont, ["delete"]:false})} id={tempData}/>}
    </>
  );
};

export default Homepage;
