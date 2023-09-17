import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/outline";

export const Login = ({ isLog }) => {
  
  const [isuserLogin, setIsUserLogin] = useState(true);
  const [isCheck, setIscheck] = useState(false);

  const handleCheckChange = () => {
    setIscheck((pre) => !pre);
  };

  return (
    <>
      <main className=" z-10 absolute w-full h-full flex justify-center items-center backdrop-blur-md">
        <section className="md:w-[25%] md:h-[70%] flex items-center justify-center rounded-lg">
          {isuserLogin ? (
            <>
              <Card className="w-96">
                <CardHeader
                  variant="gradient"
                  color="indigo"
                  className="mb-4 h-28 place-items-center flex justify-around"
                >
                  <Typography variant="h3" color="white" className="justify-self-center">
                    Sign In
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Input label="Email" size="lg" />
                  <Input label="Password" size="lg" />
                  <div className="-ml-2.5">
                    <Checkbox label="Remember Me" color="purple"/>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="gradient" fullWidth color="deep-purple">
                    Sign In
                  </Button>
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Don&apos;t have an account?
                    <Typography
                      as="a"
                      variant="small"
                      color="deep-orange"
                      className="ml-1 font-bold cursor-pointer"
                      onClick={() => setIsUserLogin(false)}
                    >
                      Sign up
                    </Typography>
                  </Typography>

                  <Typography
                      variant="small"
                      className="mt-6 flex justify-center"
                      onClick={isLog}
                    >
                      <HomeIcon className="h-6 w-6  text-red-900 cursor-pointer" />
                    </Typography>


                </CardFooter>
              </Card>
            </>
          ) : (
            <Card
              color="transparent"
              shadow={false}
              className="p-2 border border-gray-400 shadow-lg"
            >
              <Typography variant="h4" color="teal">
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Name" />
                  <Input size="lg" label="Email" />
                  <Input type="password" size="lg" label="Password" />
                </div>
                <Checkbox
                color="light-green"
                checked={isCheck}
                onChange={handleCheckChange}
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a className="font-medium transition-colors hover:text-gray-900">
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth disabled={!isCheck} color="green">
                  Register
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <a
                    className="font-medium text-blue-900 cursor-pointer"
                    onClick={() => setIsUserLogin((pre) => !pre)}
                  >
                    Sign In
                  </a>
                </Typography>

                <Typography
                      variant="small"
                      className="mt-6 flex justify-center"
                      onClick={isLog}
                    >
                      <HomeIcon className="h-6 w-6  text-red-900 cursor-pointer" />
                    </Typography>
              </form>
            </Card>
          )}
        </section>
      </main>
    </>
  );
};
