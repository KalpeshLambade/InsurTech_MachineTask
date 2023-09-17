import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import axios from "axios";

export const Update = ({ isUpated, task }) => {

  const divRef = useRef(null);

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isCheck, setIscheck] = useState(false);
  const [updateData, setUpdateData] = useState({action:task.action, remark:task.remark});

  const handelCLickOutside = (event)=> {
    if (!isInitialLoad && divRef.current && !divRef.current.contains(event.target)){
     isUpated();
    }
    setIsInitialLoad(false);
  }

  const handelChange =(e)=>{
    setUpdateData({...updateData, [e.target.name]:e.target.value});
  }

  const handleCheckChange =()=> {
      setIscheck((pre) => !pre)
  }

  const handelSubmit =async()=> {

    try {

      const response = await axios.put("http://localhost:4000/api/v1/updateTask", {
        taskId:task.taskId,
        HOS:task.HOS,
        providerName:task.providerName,
        action:updateData.action,
        remark:updateData.remark
      })

      if(response.data.sucess){
        alert(response.data.message);
        isUpated();
      }
      
    } catch (error) {
      console.log(error.response.data.message);
    }

  }

  useEffect(()=> {
    document.addEventListener("click",handelCLickOutside);

    return ()=> {document.removeEventListener("click",handelCLickOutside)}
  })

  
  return (
    <>
      <main className=" z-10 absolute w-full h-full flex justify-center items-center backdrop-blur-lg">
        
        <section ref={divRef}>
          
          <Card  color="transparent" shadow={false} className="border border-gray-400 p-4">
            <Typography variant="h4" color="blue-gray">
              Edit Audit
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to update.
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">

              <Select label="HOS ID" value={task.HOS}>
                    <Option value={task.HOS}>{task.HOS}</Option>
                </Select>

                <Select label="Provider Name" value={task.providerName}>
                    <Option value={task.providerName}>{task.providerName}</Option>
                </Select>

                <Input size="lg" label="Action" name="action" onChange={handelChange}/>
                <Input size="lg" label="Remark" name="remark" onChange={handelChange}/>
                
              </div>
              <Checkbox 
                 checked={isCheck}
                 onChange={handleCheckChange}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />


              <Button className="mt-6" fullWidth disabled={!isCheck} onClick={handelSubmit}>
                Update
              </Button>

              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't Want to Update Audit 
                <button className="mx-2 text-red-800 font-bold" onClick={isUpated}>Dashboard</button>
          
              </Typography>

            </form>


          </Card>

        </section>


      </main>
    </>
  );
};
