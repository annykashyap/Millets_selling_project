import React from "react";
import image1 from "../../image/Rice.jpg";
import image2 from "../../image/flour.jpg";
import image3 from "../../image/oil.jpg";
import CS2 from "./CS2";

const jsonDataArray = [
  {
    title: "Rise",
    image: image1,
   
  },
  {
    title: "Oil",
  
    image: image2,
   
  },
  {
    title: "Ghee",
    
    image: image3,
  },
  
];
const CSdata = () => {
  return (
    <>
      <CS2 jsonDataArray={jsonDataArray} />
    </>
  );
};

export default CSdata;
