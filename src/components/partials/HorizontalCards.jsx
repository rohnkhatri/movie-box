import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./Dropdown";
import noimg from "../../../public/images.png";
function HorizontalCards({ data }) {
  return (
      

      <div className="w-[100%] h-[60vh] flex overflow-y-hidden pb-3 ">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/detail/${d.id}`} key={i} className="min-w-[20%] h-full bg-zinc-900 mr-5">
            {(d.backdrop_path || d.poster_path) ? <img
              className="w-full h-[50%] object-fill object-center"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            /> : <img
            className="w-full h-[50%] object-fill object-center"
            src={noimg}
            alt=""
          /> }
            
            <h1 className=" text-xl font-semibold text-white px-2">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className=" text-white mb-3 mt-2 px-2">
              {d.overview.slice(0, 100)}...
              <span className="text-blue-300">more</span>{" "}
            </p>
          </Link>
        ))}
      </div>
  );
}

export default HorizontalCards;
