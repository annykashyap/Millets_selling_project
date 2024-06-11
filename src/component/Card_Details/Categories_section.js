import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import "./Categories_section.css";

const Categories_section = (props) => {
  const { jsonDataArray } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
  };

    return (
  <>
    <h1 style={{textAlign:"center"}}>Similar Products</h1>
    <div className=" mb-3 h-80 g-4  mt-5" id="similar_products_cards">
     
        {jsonDataArray.map((jsonData) => (
          <div className="card " style={{ width: "18rem" }} id="similar_cards">
            <img src={jsonData.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{jsonData.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/payment" className="btn btn-primary me-5">
                Buy Now
              </Link>
              {/* <Link to="/cart" className="btn btn-success ms-5"> */}
          <button className="btn btn-success" onClick={() => handleAddToCart(jsonData)} >Add to Cart</button>
          {/* {
            dataList && dataList.map((a)=>
            <h1>{a.image}</h1>
            )
          } */}
           <div>
        {/* <h2>Cart Items:</h2> */}
        {/* <ul>
          {cartItems && cartItems.map(item => (
            <h1>{item.title}</h1>
           
          ))}
        </ul> */}
      </div>
            </div>
          </div>
        ))}
          
      </div>
     
   </>
  )
}

export default Categories_section;