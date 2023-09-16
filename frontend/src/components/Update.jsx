import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";

export const Update = ({ isUpated, task }) => {
  return (
    <>
      <main className=" z-10 absolute w-full h-full flex justify-center items-center backdrop-blur-sm">
        

          <Card color="transparent" shadow={false} className="border border-gray-400 p-4">
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

                <Input size="lg" label="Action" />
                <Input size="lg" label="Remark" />
                
              </div>
              <Checkbox
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
              <Button className="mt-6" fullWidth>
                Update
              </Button>

              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't Want to Update Audit 
                <button className="mx-2 text-red-800 font-bold">Dashboard</button>
          
        </Typography>

            </form>


          </Card>

          {/* <p>{taskId}</p>
          <button onClick={isUpated}>Close</button> */}
          
        
      </main>
    </>
  );
};
