import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
      <h1 className="text-2xl text-white font-black">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">Binge-Box</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-5 ">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link to="/tv_shows" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-5" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-5">
          Website Information
        </h1>

        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i  className="ri-information-fill mr-2"></i>
          About Binge-Box
        </Link>

        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
