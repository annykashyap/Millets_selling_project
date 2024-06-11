import React from 'react'
import pic1 from '../../image/Rice.jpg'
import pic2 from '../../image/ghee.jpg'
import "./Mycard.css";
import Nav from '../Navbar/Nav'
import { Link } from 'react-router-dom';
// import pic3 from '../images/shirt1.jpeg'
// import pic4 from '../images/shirt2.jpeg'
// import pic5 from '../images/shirt3.jpeg'


const ProductsA = () => {

    const data = [
        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic1
        },

        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic2
        },

        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic1
        },

        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic2
        },


        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic1
        },


        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic2
        },
        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic2
        },
        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic1
        } 
    ]

    return (
        <>
        <Nav/>
        {/* <Link to='/'> 
        
        <button className='btn btn-danger m-5' id="" style={{position:"fixed",float:"right"}}>back</button>
            </Link> */}
            <h1 style={{textAlign:"center"}}>Latest Collection</h1>
            <div class="container" style={{ display: "flex", justifyContent: "space-evenly",flexWrap:"wrap", alignItems: "center", width: "100%" }}>
               
                {
                    data.map((item) => (
                        <div class="card" id="mycard" style={{ width: "260px",height:"430px",margin:"20px" }}>
                            <div class="img" id="myimg">
                                <img src={item.img} alt="picture" style={{width:"100%",padding:"10px",aspectRatio:"3/3"}}/>
                            </div>
                            <div class="content">
                                <div class="title">
                                    <h1>{item.name}</h1>
                                </div>

                                <div class="sub-title">
                                    <small>
                                        {item.description}</small>
                                    <h3>{item.price}</h3>
                                </div>
                                <button className="btn btn-success" id="buy" style={{width:"200px", height:"50px"}}>
            <Link to="/payment" className="nav-link">
              Buy now
            </Link>
          </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default ProductsA