import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/Dropdown";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";


function Movie() {
    document.title = "Binge Box | Movies ";
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetMovie = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
    
          if(data.results.length > 0){
              //   setmovie(data.results);
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
          }else{
            sethasMore(false);
          }
    
        } catch (error) {
          console.log("Error", error);
        }
      };
    
      const refershHandler = async () => {
        if(movie.length === 0){
            GetMovie();
        }else{
            setpage(1);
            setmovie([]);
            GetMovie();
        }
      }
    
      useEffect(() => {
        refershHandler();
      }, [category]);
    
  
    return movie.length > 0 ? (
        <div className="p-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
          <div className="w-full flex items-center">
            <h1 className="text-2xl text-zinc-400 font-semibold">
              <i
                onClick={() => navigate(-1)}
                className="text-[#6556CD] ri-arrow-left-line"
              ></i>
              Movies
            </h1>
            <Topnav />
            <DropDown
              title="Category"
              options={["popular", "top_rated", "upcoming", "now_playing"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="pl-20">
          <InfiniteScroll
          dataLength={movie.length}
          next={GetMovie()}
          hasMore={hasMore}
          loader={<h1>Loading..</h1>}
          >
            <Cards data={movie} title="movie" />
          </InfiniteScroll>
            </div>
        </div>
      ) : (
        <Loading />
      );
}

export default Movie