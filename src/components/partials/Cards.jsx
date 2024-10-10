import React from "react";
import { Link } from "react-router-dom";

function Cards({ data,title }) {
  // console.log(title);
  return (
    <div className="flex flex-wrap w-full h-full ">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/detail/${c.id}`} className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.7)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt="Card Image"
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[40%] text-white text-xl font-semibold rounded-full bg-yellow-600 w-[6vh] h-[6vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
