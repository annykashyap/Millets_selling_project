import image1 from "../../image/flour.jpg";
import image2 from "../../image/ghee.jpg";
import image3 from "../../image/oil.jpg";
import image4 from "../../image/Rice.jpg";
import Categories_section from "./Categories_section";


const jsonDataArray = [
  {
    id:1,
    title: "Flour",
    image: image1,
  },
  {
    id:2,
    title: "Ghee",
    image: image2,
  },
  {
    id:3,
    title: "Oil",
    image: image3,
  },
  {
    id:4,
    title: "Rice",
    image: image4,
  },
];
function Cate_section() {
  return (
    <>
      <Categories_section jsonDataArray={jsonDataArray} />
    </>
  );
}

export default Cate_section;