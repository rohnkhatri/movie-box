import React from "react";

function About() {
  return (
    <div className="text-zinc-300 bg-[#1F1E24] h-[100vh] w-[100vw] p-5">
      <h1 className="text-xl">About Binge Box</h1>

      <h3 className="mt-5">
        Welcome to Binge Box, your go-to destination for detailed movie, web
        series insights!
      </h3>
      <p>
        At Binge Box, we understand that true entertainment enthusiasts crave
        more than just watching content—they want to dive deep into the details
        that make movies, TV shows, and actors extraordinary. This platform is
        designed to provide a comprehensive and user-friendly experience,
        allowing you to explore the intricate details of your favorite films,
        series, and personalities.
      </p>

      <h2 className="mt-5">Key Features</h2>
      <li>
        Infinite Scroll : Explore an extensive collection of movies, web series,
        and actors with our infinite scroll feature. Keep scrolling to uncover
        more content and information without any interruptions.
      </li>

      <li>
        Advanced Filtering Options : Narrow down your search with our advanced
        filtering options. Filter by genres, release dates, and more to find
        exactly what you're looking for—be it a movie, TV show, or actor.
      </li>

      <li>
        Powerful Search Functionality : Looking for specific details? Our robust
        search feature lets you quickly find information on any movie, series,
        or actor . Just enter the title, keywords, or name, and we’ll deliver
        the details you need.
      </li>

      {/* <li>
        Comprehensive Movie, Series, and Actor Details:Binge Box offers in-depth
        information on movies, TV shows, and actors. From plot summaries and
        cast details to ratings and actor biographies, you’ll find everything
        you need to know in one place.
      </li>

      <li>
        Redux-Powered State Management: Enjoy a smooth and responsive user
        experience thanks to Redux, which efficiently manages state across our
        platform.
      </li>

      <li>
        Modern Design with Tailwind CSS: Navigate through our sleek and
        intuitive interface, designed with Tailwind CSS. Our modern design
        ensures that exploring your favorite movies, series, and actors is as
        enjoyable as it is informative.
      </li> */}

      <h2 className="mt-5">Technologies Behind Binge Box</h2>
      <h3>
        Binge Box is built using state-of-the-art technologies to ensure a fast
        and reliable experience:
      </h3>

      <li>React.js: For crafting a dynamic and interactive user interface.</li>
      <li>Redux: To manage application state seamlessly.</li>
      <li>Tailwind CSS: For a clean, modern, and responsive design.</li>
      <li>Vercel: For hosting Binge Box with optimal performance and speed.</li>
    </div>
  );
}

export default About;
