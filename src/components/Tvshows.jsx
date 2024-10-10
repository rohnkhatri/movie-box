import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/Dropdown";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";


function Tvshows() {
    document.title = "Binge Box | Tv Shows ";
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const Gettv = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
    
          if(data.results.length > 0){
              //   settv(data.results);
                settv((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
          }else{
            sethasMore(false);
          }
    
        } catch (error) {
          console.log("Error", error);
        }
      };
    
      const refershHandler = async () => {
        if(tv.length === 0){
            Gettv();
        }else{
            setpage(1);
            settv([]);
            Gettv();
        }
      }
    
      useEffect(() => {
        refershHandler();
      }, [category]);
    
  
    return tv.length > 0 ? (
        <div className="p-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
          <div className="w-full flex items-center m-3">
            <h1 className="text-2xl w-[20%] text-zinc-400 font-semibold">
              <i
                onClick={() => navigate(-1)}
                className="text-[#6556CD] ri-arrow-left-line"
              ></i>
              Tv-Shows
            </h1>
            <Topnav />
            <DropDown
              title="Category"
              options={["on_the_air", "popular", "top_rated", "airing_today"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="pl-20">
          <InfiniteScroll
          dataLength={tv.length}
          next={Gettv()}
          hasMore={hasMore}
          loader={<h1>Loading..</h1>}
          >
            <Cards data={tv} title="tv" />
          </InfiniteScroll>
            </div>
        </div>
      ) : (
        <Loading />
      );
}

export default Tvshows