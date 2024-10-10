import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import DropDown from "./partials/Dropdown";
import Loading from "./partials/Loading";
import Cards from "./partials/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
    document.title = "Binge Box | People ";
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const Getpeople = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
    
          if(data.results.length > 0){
              //   setpeople(data.results);
                setpeople((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
          }else{
            sethasMore(false);
          }
    
        } catch (error) {
          console.log("Error", error);
        }
      };
    
      const refershHandler = async () => {
        if(people.length === 0){
            Getpeople();
        }else{
            setpage(1);
            setpeople([]);
            Getpeople();
        }
      }
    
      useEffect(() => {
        refershHandler();
      }, [category]);
    
  

  return  people.length > 0 ? (
    <div className="p-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line"
          ></i>
           People</h1>
        <Topnav />
        
      </div>

      <div className="pl-20">
      <InfiniteScroll
      dataLength={people.length}
      next={Getpeople()}
      hasMore={hasMore}
      loader={<h1>Loading..</h1>}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
        </div>
    </div>
  ) : (
    <Loading />
  );
}

export default People