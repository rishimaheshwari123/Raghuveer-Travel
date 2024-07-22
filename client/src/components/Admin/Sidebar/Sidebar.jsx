import React, { useState } from "react";
import { NavLink, useLocation, matchPath, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";

import { AiOutlineDashboard } from "react-icons/ai";
import { GiScooter } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { setToken, setUser } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";



function Sidebar() {
  const dispatch = useDispatch()

  const handleLogout = async() => {
    localStorage.removeItem("token");
    dispatch(setToken(null))
    dispatch(setUser(null))
  };
  
  const sidebarLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "All Cabs",
      path: "/admin/all-cab",
      icon: <AiOutlineDashboard />,
    },
    {
      id: 3,
      name: "Add Cars",
      path: "/admin/add-car",
      icon: <GiScooter />,
    },
  
  ];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "200px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      animate={{
        width: isOpen ? "220px" : "45px",
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 12,
        },
      }}
      className="flex flex-col border-r-[1px] border-r-richblack-700 min-h-[calc(100vh-4rem)]   pt-3 gap-10 bg-red-400"
    >
      <div className="flex items-center justify-between text-2xl leading-0 px-2 h-8">
        <AnimatePresence>
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              initial="show"
              aniamte="show"
              exit="hidden"
              className="whitespace-nowrap text-2xl text-blue-200 font-mulish capitalize"
            >
              <div className="flex gap-2 pl-5 items-center text-3xl mt-2 text-black " onClick={handleLogout}>
              <IoIosLogOut />       Logout
              
              </div>
            </motion.h1>
          )}
        </AnimatePresence>

        <div>
          <FaBars onClick={toggle} className="cursor-pointer text-white" />
        </div>
      </div>
      {/* <div className="mx-auto my-6 h-[1px] w-10/12 bg-blue-700"></div> */}
      <section className="flex gap-4 flex-col text-3xl font-bold">
        {sidebarLinks.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.id}
              onClick={() => setIsOpen(false)}
              className={`" flex text-black font-mulish items-center gap-2 px-2 py-0 hover:border-r-4 hover:bg-blue-600 hover:transition hover:ease-in-expo " ${
                matchRoute(link?.path) && "bg-pink-400 "
              }`}
            >
              <div title={link.name} className=" text-5xl text-yellow-300">
                {link.icon}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="show"
                    aniamte="show"
                    exit="hidden"
                    className="whitespace-nowrap text-text-2xl"
                  >
                    {link.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
        <div></div>
      </section>

      <div className="flex gap-5 flex-col text-xl"></div>

      <div className="mx-auto my-6 h-[1px] w-10/12 bg-blue-700"></div>
    </motion.div>
  );
}

export default Sidebar;
