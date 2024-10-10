import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "../../../public//images.png";

function Topnav() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      //   console.log(data);
      setsearch(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[15%] ">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="w-[50%] z-[100] max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[20%] overflow-auto rounded">
        {search.map((s, i) => (
          <Link to={`/${s.media_type}/detail/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-10 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
