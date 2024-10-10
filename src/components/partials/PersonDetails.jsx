import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncloadperson,
  removeperson,
} from "../../store/actions/personAction";
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

function PersonDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  console.log(info);

  return info ? (
    <div className="px-7 w-screen h-[110vh] bg-[#1F1E24]">
      {/* nav part1 */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl">
        <Link className="w-full ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
        </Link>
      </nav>

      <div className="flex ">
        {/* Poster and detail */}
        <div className="w-[20%] flex flex-col">
          <div className="w-[100%]">
            <div className=" flex justify-center">
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.7)] h-[40vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
                alt="Card Image"
              />
            </div>
            <hr className="mt-5 mb-5 border-none h-[2px] bg-zinc-500" />
          </div>

          <div>
            {/* social media */}
            <div className="text-2xl text-white flex gap-x-10">
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              >
                <i className="hover:text-[#6556CD] ri-earth-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              >
                <i className="hover:text-[#6556CD] ri-facebook-circle-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              >
                <i className="hover:text-[#6556CD] ri-instagram-fill"></i>
              </a>

              <a
                target="_blank"
                href={`https://www.twitter.com/${info.externalid.twitter_id}`}
              >
                <i className="hover:text-[#6556CD] ri-twitter-x-fill"></i>
              </a>
            </div>

            {/* Info */}
            <h1 className="text-2xl text-zinc-400 font-semibold my-3">
              Person Info
            </h1>

            <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
            <h1 className="text-zinc-400">
              {info.detail.gender === 2 ? "Male" : "Female"}
            </h1>

            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Birthday
            </h1>
            <h1 className="text-zinc-400">{info.detail.birthday}</h1>
          </div>
        </div>

        {/* right detail and information */}
        <div className="w-[75%] ml-[5%]">
          <h1 className="text-2xl text-zinc-400 font font-semibold my-5">
            {info.detail.name}
          </h1>
          <p className="text-zinc-400 ">{info.detail.biography.slice(0,800)}</p>
          <div className="mt-5">
          <HorizontalCards data={info.combinedCredits.cast}/>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;
