import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/Dropdown";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = "Binge Box | Trending ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        //   settrending(data.results);
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refershHandler = async () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  return trending ? (
    <div className="p-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full  flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <Topnav />
        <DropDown
          title="Category"
          options={["movie", "tv", "all"]}
          func={(e) => setcategory(e.target.value)}
        />
        <DropDown
          title="Duration"
          options={["week", "day"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>

      <div className=" pl-20">
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending()}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
        >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
