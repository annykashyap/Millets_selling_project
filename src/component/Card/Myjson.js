import image1 from "../../image/Rice.jpg";
import image2 from "../../image/flour.jpg";
import image3 from "../../image/oil.jpg";

// import image4 from "../Img/ghee.jpg";
import Cards from "./Cards";

const jsonDataArray = [
  {
    title: "Rice",
    image: image1,
    image2: image2,
    image3: image3,
    price: 48,
    quantity: "3 sheets",
    weight: "1kg"
  },
  {
    title: "Oil",
    image: image1,
    image2: image2,
    image3: image3,
    price: 68,
    quantity: "3 sheets",
    weight: "1kg"

  },
  {
    title: "Ghee",
    image: image1,
    image2: image2,
    image3: image3,
    price: 98,
    quantity: "3 sheets",
    weight: "5kg"

  },
  {
    title: "Flour",
    image: image1,
    image2: image2,
    image3: image3,
    price: 118,
    quantity: "3 sheets",
    weight: "2kg"

  },
];
function Myjson() {
  return (
    <>
      <Cards jsonDataArray={jsonDataArray} />
    </>
  );
}

export default Myjson;
