import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../../image/flour.jpg";
import pic2 from "../../image/Rice.jpg";
import pic3 from "../../image/Ghee1.jpg";
import "./Mycard.css";

import { Link } from "react-router-dom";

const Mycards = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 2,
    autoplay: true,
    initialSlide: 0,
    cssEase: "linear",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "Flour",
      description: "Fortune",
      price: 800,
      img: pic1,
    },

    {
      name: "Rice",
      description: "Fortune",
      price: 800,
      img: pic2,
    },

    {
      name: "Ghee",
      description: " Harbour",
      price: 800,
      img: pic3,
    },

    {
      name: "Flour",
      description: "Fortune",
      price: 800,
      img: pic1,
    },

    {
      name: "Rice",
      description: "Fortune",
      price: 800,
      img: pic2,
    },

    {
      name: "Ghee",
      description: "Fortune",
      price: 800,
      img: pic3,
    },

    {
      name: "Flour",
      description: "Fortune",
      price: 800,
      img: pic1,
    },

    {
      name: "Rice",
      description: "Fortune",
      price: 800,
      img: pic2,
    },
  ];
  return (
    <div className="casousal" id="cards" >
      <h2 style={{ textAlign: "center" }} id="millets_heading">Millets</h2>
      <p style={{ textAlign: "center" }} id="millets_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.{" "}
      </p>
      <Slider {...settings} >
        {data.map((item) => (
          <div className="main-box">
            <Link to="/myjson" className="nav-link">
              <div className="img-box">
                <img src={item.img} />
              </div>
            </Link>
            {/* <div className="content"> */}
              {/* <div className="title">
                                    <h1>{item.name} </h1>
                                </div>
                                <div className="sub-title">
                                    <small>
                                        {item.description}</small>
                                    <h3>Rs.{item.price}</h3>
                                </div> */}

              {/* <button className='seemore'>
                               <Link to="/myjson" className='nav-link' > See more</Link>  </button> */}
            {/* </div> */}
          </div>
        ))}

        <div className="main" style={{}}>
          <div className="side-btn"  id="side_button">
            <Link to="/myproducts">See more</Link>
          </div>
          {/* style={{width:"100%",textAlign:"center",marginTop:"12.5rem",backgroundColor:"white"}} */}
        </div>
      </Slider>
    </div>
  );
};

export default Mycards;
