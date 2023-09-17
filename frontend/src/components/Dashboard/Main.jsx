import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import axios from "axios";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Task Id",
  "HOS ID",
  "Provider Name",
  "Action Performed",
  "Time Stamp",
  "Remark",
  "Action",
];

export function Main({ isDelete, isChanged, isUpdate ,isAdd}) {
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);

  const getAuditDetails = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/getTask");
      if (response.data.sucess) {
        setTABLE_ROWS(response?.data?.allTask);
      }
      else{
        alert(response?.data?.message);
      }
    } catch (error) {
      alert(!error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAuditDetails();
  }, [isChanged]);

  return (
    <>
    <Card className="h-full w-[90%] overflow-scroll flex mt-2 ml-5">
      {TABLE_ROWS.length ? (
        <>
          <table className="w-full table-auto text-left mt-4">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((e, i) => (
                <tr key={i} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.taskId}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.HOS}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {e.providerName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {e.action}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {e.updatedAt.slice(0, 10).split("-").reverse().join("-")}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {e.remark}
                    </Typography>
                  </td>

                  <td className="p-4 flex ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium mx-2"
                    >
                      <IconButton color="green" onClick={() => isUpdate(e)}>
                        <PencilSquareIcon className="h-6 w-6 text-white" />
                      </IconButton>
                    </Typography>

                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium px-2"
                    >
                      <IconButton color="red" onClick={() => isDelete(e)}>
                        <TrashIcon className="h-6 w-6 text-white" />
                      </IconButton>
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Button
        size="md"
        variant="gradient"
        color="light-blue"
        className="flex items-center overflow-hidden justify-center my-12 self-center md:mr-10 ml-80 md:ml-0"
        onClick={isAdd}
      >
        Create new Audit
      </Button>
        </>
      ) : (
        <>
        <div className="text-center py-6"> No Audit Found</div>
        <Button
        size="md"
        variant="gradient"
        color="light-blue"
        className="flex items-center overflow-hidden justify-center my-12 self-center md:mr-10 ml-80 md:ml-0"
        onClick={isAdd}
      >
        Create new Audit
      </Button>
        </>
      )}
    </Card>
    </>
  );
}
