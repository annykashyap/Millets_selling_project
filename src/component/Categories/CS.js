import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './CS.css';
import { HashLink } from "react-router-hash-link";
import Mycards from '../Card_carousel/Mycards';
import Flour_carousel_json from '../Card_carousel/Flour_carousel_json';
import Rice_carousel_json from '../Card_carousel/Rice_carousel_json';
import Ghee_carousel_json from '../Card_carousel/Ghee_carousel_json';



const CS = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          // dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5
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
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      }

    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}  id='slider'>
        <div> 
          <HashLink to={"/#cards"} className='nav-link ps-4  text-start'>  <div className='cat1'> </div> </HashLink>
          <p className='p1' >Millets</p>
        </div>
        <div>

          <HashLink to={"/#flour_cards"} className='nav-link ps-4  text-start'> <div className='cat2'></div>   </HashLink>
          <p className='p1'>flour</p>
        </div>
        <div>

          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'> <div className='cat3'>
          </div> </HashLink>
          <p className='p1'>Ghee</p>
        </div>
        <div>

          <HashLink to={"/#rice_cards"} className='nav-link ps-4 text-start'> <div className='cat4'>
          </div></HashLink>
          <p className='p1'>Rice</p>
        </div>
        <div>
         
          <HashLink to={"/#rice_cards"} className='nav-link ps-4  text-start'>
          <div className='cat1'>
          </div>
          </HashLink>
          <p className='p1'> Rice</p>
        </div>
        <div>
       
          <HashLink to={"/#cards"} className='nav-link ps-4  text-start'>   <div className='cat2'>
          </div></HashLink>
          <p className='p1'>Millets</p>
        </div>
        <div>
         
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'>  <div className='cat3'>
          </div></HashLink>
          <p className='p1'>Ghee</p>
        </div>
        <div>
          
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'> <div className='cat4'>
          </div></HashLink>
          <p className='p1'>Ghee</p>
        </div>
        <div>
         
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'>  <div className='cat4'>
          </div></HashLink>
          <p className='p1'>Ghee</p>
        </div>
        <div>
         
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'>  <div className='cat4'>
          </div></HashLink>
          <p className='p1'>Ghee</p>
        </div>
        <div>
          
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'>
          <div className='cat4'>
          </div>
          </HashLink>
          <p className='p1'> Ghee</p>
        </div>
        <div>
        
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4 text-start'>    <div className='cat4'>
          </div></HashLink>
          <p className='p1'>Ghee</p>
        </div>
        <div>
         
          <HashLink to={"/#ghee_cards"} className='nav-link ps-4  text-start'>  <div className='cat4'>
          </div></HashLink>
          <p className='p1'>Ghee</p>
        </div>


      </Slider>
    </div>
  )
}

export default CS