import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import pic1 from '../../image/Rice.jpg';
import pic2 from '../../image/rice2.jpg';
import "./Mycard.css";

import { Link } from 'react-router-dom';
var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const data = [
    {
        name: "Rice",
        description: "Fortune",
        price: 800,
        img: pic1
    },

    {
        name: "Rice",
        description: "Fortune",
        price: 800,
        img: pic2
    },

    {
        name: "Rice",
        description: " Harbour",
        price: 800,
        img: pic1
    },

    {
        name: "Rice",
        description: "Fortune",
        price: 800,
        img: pic2
    },

    {
        name: "Rice",
        description: "Fortune",
        price: 800,
        img: pic1
    },

    {
        name: "Rice",
        description: "Fortune",
        price: 800,
        img: pic2
    },

    {
        name: "Rice",
        description: "Fortune",
        price: 800,
        img: pic1
    },

    {
        name: "Rice",
        description: "Fortune",
        price: 800, 
        img: pic2
    }
]

const Rice_carousel_json = () => {
  return (
    <> <div className="casousal" id="rice_cards">
    <h2 style={{textAlign:"center"}}>Rice</h2>
    <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
    <Slider {...settings}>
        {
            data.map((item) => (
                <div className="main-box">
            <Link to="/myjson" className='nav-link' ><div className="img-box">
                        <img src={item.img} />
 
                    </div></Link> 
 
                    {/* <div className="content">
                        <div className="title">
                            <h1>{item.name} </h1>
                        </div>
                        <div className="sub-title">
                            <small>
                                {item.description}</small>
                            <h3>Rs.{item.price}</h3>
                        </div>
 
 
                        <button className='seemore'>
                       <Link to="/myjson" className='nav-link' > See more</Link>  </button>
 
                    </div> */}
                </div>
            ))
        }
 
        <div className='main' style={{}}>
 
 
            <div className="side-btn" >
            
                <Link to="/rice_carousel">See more</Link>
            </div>
            {/* style={{width:"100%",textAlign:"center",marginTop:"12.5rem",backgroundColor:"white"}} */}
        </div>
      
 
    </Slider>
 </div></>
  )
}

export default Rice_carousel_json