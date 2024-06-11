import React from "react";
import Nav from "./component/Navbar/Nav";
import Slides from "./component/Slide/Slides";
import Mycards from "./component/Card_carousel/Mycards";
import CS from "./component/Categories/CS";
import Flour_carousel_json from "./component/Card_carousel/Flour_carousel_json";
import Ghee_carousel_json from "./component/Card_carousel/Ghee_carousel_json";
import Rice_carousel_json from "./component/Card_carousel/Rice_carousel_json";

const Home = () => {
  return (
    <>
      <Nav />
      <CS />
      <Slides/>
      <Mycards />
      <Flour_carousel_json/>
      <Ghee_carousel_json/>
      <Rice_carousel_json/>
    </>
  );
};

export default Home;
