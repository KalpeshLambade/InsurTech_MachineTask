import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { AuthContext } from "../UserContext/AuthProvider";

export const AddTask = ({ isAdd }) => {
  const {state} = useContext(AuthContext);

  const divRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isCheck, setIscheck] = useState(false);
  const [hospitalData, setHospitalData] = useState();
  const [addData,setAddData] =useState({HOS:"", providerName:"", action:"", remark:""});

  const handelCLickOutside = (event) => {

    if (
      !isInitialLoad &&
      divRef.current &&
      !divRef.current.contains(event.target)
    ) {
      isAdd();
    }
    setIsInitialLoad(false);
  };

  useEffect(() => {
    document.addEventListener("click", handelCLickOutside);

    return () => {
      document.removeEventListener("click", handelCLickOutside);
    };
  });

  useEffect(() => {
    const getHospitalList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/gethospital"
        );

        if (response?.data?.sucess) {
            setHospitalData(response?.data?.hospitals)
        }
        else{
          alert(response?.data?.message);
        }
      } catch (error) {
        if(!error.response.data.sucess){
            console.log(error.response.data.message);
        }
      }
    };
    getHospitalList();
  }, []);

  const handleCheckChange = () => {
    setIscheck((pre) => !pre);
  };

  const handelChange =(e,name) => {

    if(e.target === undefined){
        return setAddData({...addData, [name]:e})
    }

        setAddData({...addData, [e.target.name]:e.target.value})
  }

  const addNewTAsk = async() => {
    try {

        const response = await axios.post("http://localhost:4000/api/v1/addTask" ,{
            HOS:addData.HOS,
            providerName:addData.providerName,
            action:addData.action,
            remark:addData.remark,
            userId:state?.user?.id
        })

        if(response?.data?.sucess){
            alert(response?.data?.message);
            isAdd();
        }
        else{
            alert(response?.data?.message);
        }


    } catch (error) {
        if(!error?.response?.data?.sucess){
            console.log(error?.response?.data?.message)
        }
    }
  }


  return (
    <>
      <main className=" z-10 absolute w-full h-full flex justify-center items-center  backdrop-blur-md">
        <section
          ref={divRef}
          className="md:w-[50%] md:h-[80%] flex flex-col justify-center items-center border border-gray-400 rounded-lg"
        >
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="indigo">
              Create New Audit
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">

              <Select label="HOS ID" onChange={(e) => handelChange(e,"HOS")}>
                    {hospitalData ?(
                        hospitalData.map((e,i)=>(
                            <Option value={e.HOS} key={i}>{e.HOS}</Option>
                        ))
                     ):(<Option value="No Data" disabled> No Data</Option>)}

                </Select>

                <Select label="Provider Name" onChange={(e) => handelChange(e,"providerName")}>
                    {hospitalData ?(
                        hospitalData.map((e,i)=>(
                            <Option value={e.providerName + "" + e.Address} key={i}>{e.providerName + "" + e.Address}</Option>
                        ))
                     ):(<Option value="No Data" disabled> No Data</Option>)}

                </Select>

                <Input size="lg" label="Action" name="action" onChange={handelChange}/>
                <Input size="lg" label="Remeark" name="remark" onChange={handelChange}/>
              </div>
              <Checkbox
                checked={isCheck}
                onChange={handleCheckChange}
                color="indigo"
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
              <Button className="mt-6" fullWidth disabled={!isCheck} color="pink" onClick={addNewTAsk}>
                Create New Audit
              </Button>

              <Typography color="gray" className="mt-4 text-center font-normal">
                By submitting this form, you acknowledge that you have read,
                understood, and agree to these terms and conditions.
              </Typography>
            </form>
          </Card>
        </section>
      </main>
    </>
  );
};
