import React from 'react';
// import pic1 from '../images/pic1.jpeg'
import pic2 from '../../image/flour2.jpg'
import Nav from '../Navbar/Nav';
import { Link } from 'react-router-dom';



const Flour_carouselS = () => {
    const data = [
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
            img: pic2
        },
        {
            name: "Shirt",
            description: "Daily Casual shirt",
            price: 800,
            img: pic2
        } 
    ]

    return (
        <>
        <Nav/>
        <Link to='/'> 
        
        <button className='btn btn-danger m-5' id="" style={{position:"fixed",float:"right"}}>back</button>
            </Link>
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
                                <div class="btn2">
                                <button className="btn btn-success" id="buy" style={{width:"200px", height:"50px"}}>
            <Link to="/payment" className="nav-link">
              Buy now
            </Link>
          </button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Flour_carouselS