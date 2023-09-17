import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import axios from "axios";

export const Delete = ({isDelete, taskId}) => {

    const divRef = useRef(null);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const handelCLickOutside = (event)=> {
      if (!isInitialLoad && divRef.current && !divRef.current.contains(event.target)){
        isDelete();
      }
      setIsInitialLoad(false);
    }

    useEffect(()=> {
      document.addEventListener("click",handelCLickOutside);

      return ()=> {document.removeEventListener("click",handelCLickOutside)}
    })

    const delectTask = async() => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/v1/delectTask/${taskId}`);

            if(response?.data?.sucess){
                alert(response?.data?.message);
                isDelete();
            }
        } catch (error) {
            if(!error?.response?.data?.sucess){
                alert(error?.response?.data?.message);
            }
        }
    }

  return (
    <>
      <main className=" z-10 absolute w-full h-full flex justify-center items-center backdrop-blur-sm">
        <section ref={divRef}  className="md:w-[50%] md:h-[30%] flex flex-col justify-between border border-gray-400 rounded-lg">
          <div className="flex justify-between mx-5 my-5 ">
            <p className="font-medium text-xl">Are you sure want to delete ?</p>
            <button onClick={isDelete}>
              <XMarkIcon className="h-8 w-8 text-blue-800 ml-4" />
            </button>
          </div>

          <div className=" mb-10 flex justify-end">
            <Button color="green" className="mx-5" onClick={isDelete}>Cancel</Button>
            <Button color="red" className="mr-5" onClick={delectTask}>Delete</Button>
          </div>
        </section>
      </main>
    </>
  );
};
