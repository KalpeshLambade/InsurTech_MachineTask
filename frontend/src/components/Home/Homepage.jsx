import React, { useEffect, useState } from "react";
import { HomeNavbar } from "./HomeNav";
import { Main } from "../Dashboard/Main";
import Sidebar from "../sidebar/Siderbar";
import { Delete } from "../Dashboard/Delete";
import { Update } from "../Dashboard/Update";
import { AddTask } from "../Dashboard/AddTask";
import { Login } from "../UserData/Login";

const Homepage = () => {
  const [browserWidth, setBrowserWidth] = useState();

  const [displayCont, setDisplayCont] = useState({delete:false, add:false, update:false});
  const [tempData, setTempData] = useState(null);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setBrowserWidth(window.innerWidth || document.documentElement.clientWidth);
  }, [browserWidth]);

  
  return (
    <>
      <main className="md:h-full justify-around md:w-full h-30 md:top-20 md:right-0 top-16 w-full fixed flex flex-col md:flex-row border-blue-900" >

        <div className="lg:w-[16%] md:w-[28%] h-[calc(100vh-2rem)] hidden md:flex border"> 
          {browserWidth >700 && <Sidebar/> }
        </div>

        <div className="lg:w-[84%] md:w-[72%] flex flex-col justify-center items-center ">
          <HomeNavbar isLog={()=> setIsUser((pre) => !pre)} />

          
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
          isAdd ={() =>{
            setDisplayCont({...displayCont, ["add"]:true});
            setTempData("");
          }
          }
          />

        </div>
          
      </main>

      {displayCont?.delete && <Delete isDelete={()=> setDisplayCont({...displayCont, ["delete"]:false})} taskId={tempData}/>}
      {displayCont.update && <Update isUpated = {()=> setDisplayCont({...displayCont, ["update"]:false})} task={tempData} />}
      {displayCont?.add && <AddTask isAdd = {()=> setDisplayCont({...displayCont, ["add"]:false})} />}

      {isUser && <Login isLog={()=> setIsUser((pre) => !pre)}/>}


    </>
  );
};

export default Homepage;
