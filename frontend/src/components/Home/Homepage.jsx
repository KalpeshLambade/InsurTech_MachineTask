import React, { useEffect, useState } from "react";
import { HomeNavbar } from "./HomeNav";
import { Main } from "../Main";
import Sidebar from "../sidebar/Siderbar";
import { Delete } from "../Delete";
import { Update } from "../Update";

const Homepage = () => {
  const [browserWidth, setBrowserWidth] = useState();

  const [displayCont, setDisplayCont] = useState({delete:false, add:false, update:false});
  const [tempData, setTempData] = useState(null);

  useEffect(() => {
    setBrowserWidth(window.innerWidth || document.documentElement.clientWidth);
  }, [browserWidth]);

  
  return (
    <>
      <main className="md:h-full justify-around md:w-full h-30 md:top-20 md:right-0 top-16 w-full fixed flex flex-col md:flex-row border-blue-900" >

        <div className="lg:w-[16%] md:w-[28%] h-[calc(100vh-2rem)] hidden md:flex "> 
          {browserWidth >700 && <Sidebar/> }
        </div>

        <div className="lg:w-[84%] md:w-[72%] flex flex-col border-red-900 ">
          <HomeNavbar/>
          <Main  isChanged ={displayCont}  
          isDelete={(e)=> {
            setDisplayCont({...displayCont, ["delete"]:true});
            setTempData(e.taskId);
          }}  
          isUpdate ={(e) =>{
            setDisplayCont({...displayCont, ["update"]:true});
            setTempData(e);
          }
          }
          />
        </div>

      </main>

      {displayCont?.delete && <Delete isDelete={()=> setDisplayCont({...displayCont, ["delete"]:false})} taskId={tempData}/>}
      {displayCont.update && <Update isUpated = {()=> setDisplayCont({...displayCont, ["update"]:false})} task={tempData} />}
    </>
  );
};

export default Homepage;
