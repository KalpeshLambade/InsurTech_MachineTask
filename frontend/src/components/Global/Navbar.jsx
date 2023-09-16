import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Siderbar";

const NavbarMain = () => {
  const [browserWidth, setBrowserWidth] = useState();
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    setBrowserWidth(window.innerWidth || document.documentElement.clientWidth);
  }, [browserWidth]);

  return (
    <>
      <nav className="w-full h-12 flex justify-evenly items-center lg:h-20 shadow-sm fixed top-0">
        <div className="w-[20%] h-[80%]  flex justify-center items-center lg:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={browserWidth < 1020 ? "32" : "40"} //32
            height={browserWidth < 1020 ? "32" : "40"} //32
            fill="#09308b"
            viewBox="0 0 256 256"
            onClick={()=> setIsSidebar((pre) => !pre)}
            className="cursor-pointer"
          >
            <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>
          </svg>
        </div>
        <div className="w-[70%] h-[80%]  flex justify-center items-center">
          <div className="w-[30%] h-[90%] lg:w-[15%] md:w-[20%]">
            <img
              src="https://claimzippy.com/assets/img/cz_header_logo.png"
              alt="logo"
              className="h-full w-full"
            />
          </div>
        </div>
      </nav>

      {browserWidth >700 ?<Sidebar/> : isSidebar && <Sidebar/>}
    </>
  );
};

export default NavbarMain;
