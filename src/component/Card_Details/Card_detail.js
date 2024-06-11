import "./Card_details.css";
import { RiStarSFill } from "react-icons/ri";
import Accordion from "react-bootstrap/Accordion";
import Nav from "../Navbar/Nav";
import { Link } from "react-router-dom";
import Cate_section from "./Cate_section";
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from "../../redux/store"

const jsonDataArray =[
    
  {
      id: 1,
      netquantity:"1",   
      Weight:"1kg",
      price:"₹ 298"
  }
]

const Card_detail = () => {
  // const dataList =useSelector(state=>state.items)
  // const dispatch = useDispatch();
  // console.log(dataList)

  // const handleAddData = () => {
  //   dispatch(addItem(jsonDataArray));
  // };
 
  return (
    <>
      <Nav />
      {/* <Link to='/myjson'> 
        
        <button className='btn btn-danger m-5' id="" style={{position:"fixed",float:"right"}}>back</button>
            </Link> */}
      <div className="Main_div">
        <div className="first_child_section">
          {/* ------------------------------------------- */}
          <div className="left_box1"></div>
          {/* -------------------------------------------------- */}
          <div className="right_box1">
            <h1>Healthy Foods</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <span className="stars">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </span>
            {jsonDataArray.map((jsonData) => (    
          <div>
              <h5>net quantity: {jsonData.netquantity}</h5>
                <br />
                <h5>Weight:{jsonData.Weight}</h5>
                <br />
                <h3>price{jsonData.price}</h3>
                <br />
          </div>
          ))}

          </div>
          
        </div>
        <div className="second_child_section">
          <div className="second_child_left_box1">
            <div className="des">
              <h3>Description</h3>
            </div>
            <div className="spec">
              <h3>Specification</h3>
            </div>
          </div>
          <div className="second_child_right_box2">
          <h2 id="desc">Description</h2>
            <p>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
            <h2 id="spec"> Specification</h2>

            <ul>
              <li>Product Indormation</li>
              <li>GENERAL INFORMATION</li>
              <li>Brand:India Gate</li>
              <li>Manufacture:KRBL Ltd.Manufacture</li>
              <li>
                Address KRBL Limited:Ninth Mile Stone,Post:Dujana,Bulandshahar
                Road,Dist Gautam Budh Nagar, 203207(U.P),India
              </li>

              <li>
                KRBL Limited Village Bhasaur Dist,Sangrur,Punjab-148024,India
              </li>
              <li>
                KRBL Limited 29/15-29/16,Vill,Jindpur,G.T.Karnal Road Alipur
                Delhi-110036,India
              </li>
              <li>
                KRBL Limited Khasra No. 98/12, Sonipat Narela Road,Opposite
                Bolbam Dharam Kanta,Village Akbarpur
              </li>
              <li>Barota Distt-Sonipat ,Haryana-131103 India</li>
              <li>Manufacture Email customercare@krblindia.com</li>
              <li>Manufacture Websitewww.krblrice.com Sold bharat millets</li>
              <li>Customer Care Emailcs@BharatMillets.com</li>
              <li>
                BharatMillets Customer Care Phone:18008901222 Food Type Country
                of Origin India
              </li>
              <li>PRODUCT DETAILS Net Quantity:5kg</li>
              <li>PRODUCT SPECIFICATION:Product Type Basmati Rice</li>
            </ul>
          </div>
        </div>
        <div className="QA_section">
          <div className="Accor">
            <span className="QA_heading">
              <h1>Questions and Answers</h1>
            </span>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" alwaysOpen>
                <Accordion.Header>
                  Q:How many Rice Varities are Available?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Q:How many Rice Varities are Available?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Q:How many Rice Varities are Available?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div style={{marginBottom:"170px"}}>
        <Cate_section />

        </div>

        <div className="footer_btn">
          <button className="btn btn-success" id="buy" >
            <Link to="/payment" className="nav-link">
              Buy now
            </Link>
          </button>
          
          <button className="btn btn-success ms-3" id="cart"  >Add to Cart</button>
          {/* {
            dataList && dataList.map((a)=>
            <h1>{a}</h1>
            )
          } */}
        </div>
      </div>
    </>
  );
};

export default Card_detail;
