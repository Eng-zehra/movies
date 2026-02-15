import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const sidebar = [
    {
      id: 1,
      title: "Home",
      icon: <i NameclassNameName="ri-home-2-line"></i>,
      link: "/",
    },

    {
      id: 2,
      title: "TV Shows",
      icon: <i className="ri-tv-line"></i>,
      link: "/tvshows",
    },

    {
      id: 3,
      title: "Movies",
      icon: <i className="ri-movie-2-line"></i>,
      link: "/movies",
    },

    {
      id: 4,
      title: "Animations",
      icon: <i className="ri-bear-smile-line"></i>,
      link: "/animations",
    },

    {
      id: 5,
      title: "Novels",
      icon: <i className="ri-book-open-line"></i>,
      link: "/novels",
    },

    {
      id: 6,
      title: "Games",
      icon: <i className="ri-gamepad-line"></i>,
      link: "/games",
    },
  ];

  return (
    <div className="flex h-16 px-10 items-center justify-between bg-orange-400 text-white border-b border-black">
      <div className="flex items-center">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-30 pt-4" />
        <h1 className="text-3xl font-bold pr-5">
          Zon<span className="text-orange-600">Films</span>
        </h1>

      {sidebar.map((item) => (
        <div key={item.id} className="px-3">
          <Link
            to={item.link}
            className="flex items-center cursor-pointer h-10 my-2 hover:bg-orange-400"
            >
            <p className="">{item.title}</p>
           
          </Link>
        </div>
      ))}
      </div>

      </div>
      
    </div>
  );
}

export default Navbar;
