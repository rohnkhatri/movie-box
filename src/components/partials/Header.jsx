import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      // style={{
      //   background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.6)),url(https://image.tmdb.org/t/p/original/${
      //     data.backdrop_path || data.profile_path
      //   })`,
      //   backgroundPosition: "center",
      //   backgroundSize: "contain",
      //   // backgroundSize: "fill",
      //   // backgroundSize: 'cover',
      //   // backgroundRepeat:"no-repeat",
      // }}

      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.6)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "95% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] object-fill"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-white mb-3">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/detail/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>{" "}
      </p>
      <p className="text-white ">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase() || "No Information"}
      </p>
      {/* <Link className="bg-[#6556CD] p-4 rounded mt-3 text-white font-semibold">
        {"  "}Watch Trailer
      </Link> */}
    </div>
  );
}

export default Header;
