import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from '../partials/Notfound';

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const category = pathname.includes("movie") ? "movie" : "tv";
  
  const ytvideo = useSelector((state) => state[category].info.videos);
  
  return ytvideo ? (
    <div className="bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">hello
      <Link className="w-full">
        <i
          onClick={() => navigate(-1)}
          className="absolute top-[5%] right-[5%] hover:text-[#6556CD] ri-close-fill"
        ></i>
      </Link>
      <ReactPlayer
        height={800}
        width={1000}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />
    </div>
  ) : (
    <NotFound />
  );
}

export default Trailer;
