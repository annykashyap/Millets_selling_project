import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Nav from "../Navbar/Nav";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { RxCross2 } from "react-icons/rx";
import FilterButton from "../Cate_gories/FilterButton";
import SortBy from "../Cate_gories/SortBy";
import "./Cards.css";

function Cards(props) {
  const { jsonDataArray } = props;
  
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);


  // State variables for filter criteria
  const [priceFilter, setPriceFilter] = useState(0);
  const [quantityFilter, setQuantityFilter] = useState(0);
  const [weightFilter, setWeightFilter] = useState(0);
  const [ratingFilter, setRatingFilter] = useState(0);

  // Function to filter jsonDataArray based on filter criteria
  const filteredData = jsonDataArray.filter(item => 
    item.price >= priceFilter &&
    item.quantity >= quantityFilter &&
    item.weight >= weightFilter &&
    item.rating >= ratingFilter
  );

  return (
    <>
      <Nav/>
      {/* <Link to='/'> 
        
        <button className='btn btn-danger m-5' id="" style={{position:"fixed",float:"right",zIndex:1}}>back</button>
            </Link> */}
      <div className=" " id="cardS">
        {jsonDataArray.map((jsonData) => (
          <Link to="/carddetails" className="nav-link">
            <div className="card "   id="cards_list">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={jsonData.image}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={jsonData.image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={jsonData.image3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              <div
                className="card-body"
                style={{ backgroundColor: " #97cc9ef5" }}>
                <h5 className="card-title"> {jsonData.title}</h5>
                <p className="card-text"> Price:{jsonData.price}</p>
                <p className="card-text">Quantity:{jsonData.quantity}</p>
                <p className="card-text">Weight:{jsonData.weight}</p>

              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="button_section" style={{position:"sticky"}}>
          <div><button className="filter_btn btn btn-danger" onClick={() => setVisible(true)}>Filter By</button>
          <Modal className='w-75'
                    isOpen={visible}
                    style={{
                      overlay: { background: " rgba(208, 228, 221, 0.337)" },
                    }}
                  >
                    <button
                      className="btn btn-danger py-2 px-3 mt-5 ms-5"
                      onClick={() => setVisible(false)}
                    >
                     <RxCross2 />
                    </button>
                   <SortBy   
               priceFilter={priceFilter} 
              quantityFilter={quantityFilter} 
              weightFilter={weightFilter} 
              ratingFilter={ratingFilter} 
              setPriceFilter={setPriceFilter} 
              setQuantityFilter={setQuantityFilter} 
              setWeightFilter={setWeightFilter} 
              setRatingFilter={setRatingFilter}  />
                  </Modal>
                  </div>
          <div><button className="sort_btn btn btn-danger" onClick={() => setVisible2(true)}>Sort By</button>
          <Modal className='w-75'
                    isOpen={visible2}
                    style={{
                      overlay: { background: " rgba(208, 228, 221, 0.337)" },
                     
                    
                    }}
                  >
                    <button
                      className="btn btn-danger py-2 px-3 mt-5 ms-5 "
                      onClick={() => setVisible2(false)}
                    >
                     <RxCross2 />
                    </button>
                   <FilterButton/>
                  </Modal>

          </div>
        </div>
    </>
  );
}

export default Cards;
