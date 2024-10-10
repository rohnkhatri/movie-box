import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/Dropdown";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  document.title = "Binge Box | Popular ";
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        //   setpopular(data.results);
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const refershHandler = async () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return popular ? (
    <div className="p-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <Topnav />
        <DropDown
          title="Category"
          options={["movie", "tv"]}
          func={(e) => setcategory(e.target.value)}
        />
      </div>

      <div className="pl-20">
      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular()}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
        >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
        </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
