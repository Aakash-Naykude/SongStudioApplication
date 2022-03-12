import React from "react";
import "./Home.css";
function More({ song, url, artists, cover_image }) {
  return (
    <div className="moreCont">
      <img src={cover_image} alt="Img" />
      <h1>{song}</h1>
    </div>
  );
}

export default More;
