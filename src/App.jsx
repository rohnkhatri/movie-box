import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import About from "./components/About";
import Contact from "./components/Contact";
import Moviedetails from "./components/partials/Moviedetails";
import TvDetails from "./components/partials/TvDetails";
import PersonDetails from "./components/partials/PersonDetails";
import Trailer from "./components/partials/Trailer";
import Notfound from "./components/partials/Notfound";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/detail/:id" element={<Moviedetails />} />
        <Route path="/movie/detail/:id/trailer" element={<Trailer />}>
        </Route>

        <Route path="/tv_shows" element={<Tvshows />} />
        <Route path="/tv/detail/:id" element={<TvDetails />} />

        <Route path="/people" element={<People />} />
        <Route path="/person/detail/:id" element={<PersonDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
