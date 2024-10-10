import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./HorizontalCards";
import Trailer from "./Trailer";

function Moviedetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={info.detail.backdrop_path ? {
        background: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.25)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }: {backgroundColor : '#1F1E24'}}
      className="relative w-[100vw] h-[170vh] px-[5%] "
    >
      {/* nav part1 */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl">
        <Link className="w-full ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-[#6556CD] ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-[#6556CD] ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <i className="hover:text-[#6556CD]">imdb</i>
        </a>
      </nav>

      {/* poster and detail */}
      <div className=" w-full  flex h-[50vh]">
        <div className=" w-[40%]">
          <img 
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.7)] h-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt="Card Image"
          />
        </div>

        <div className="content ml-[2%] text-white justify-around">
          <h1 className="text-5xl font-black  ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-zinc-200 text-xl font-bold ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-2 flex  items-center gap-x-5 gap-y-10">
            <h1 className=" font-semibold text-2xl leading-6">User Score</h1>
            <span className=" text-white text-xl font-semibold rounded-full bg-yellow-600 w-[6vh] h-[6vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl mt-2 font-semibold italic text-zinc-200 ">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl font-semibold mt-2 mb-10">
            <p>{info.detail.overview}</p>
          </h1>

          {/* <Link
            className="p-5 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill"></i>
            Play Trailer
          </Link> */}
          
        </div>
      </div>

      {/* watch provider */}
      <div className="text-zinc-100 w-[100%]">
        <div className="mt-5 ">
          <div className="flex mb-3">
            <h2 className="flex items-center">Watch Provider</h2>
            {info.watchproviders &&
              info.watchproviders.flatrate &&
              info.watchproviders.flatrate.map((w, index) => (
                <img
                  key={w.provider_id || index}
                  className="w-[6vh] h-[6vh] object-cover rounded-md ml-10"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="watch Provider"
                />
              ))}
          </div>

          <div className="flex mb-3">
            <h2 className="flex items-center">Rent Provider</h2>
            {info.watchproviders &&
              info.watchproviders.rent &&
              info.watchproviders.rent.map((w, index) => (
                <img
                  key={w.provider_id || index}
                  className="w-[6vh] h-[6vh] object-cover rounded-md ml-10"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="watch Provider"
                />
              ))}
          </div>
          
          <div className="flex mb-10">
            <h2 className="flex items-center">Purchase Movie</h2>
            {info.watchproviders &&
              info.watchproviders.buy &&
              info.watchproviders.buy.map((w, index) => (
                <img
                  key={w.provider_id || index}
                  className="w-[6vh] h-[6vh] object-cover rounded-md ml-10"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="watch Provider"
                />
              ))}
          </div>
        </div>
      </div>
      <hr />
      {/* recommendations */}
      <div className="mt-5">
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default Moviedetails;
