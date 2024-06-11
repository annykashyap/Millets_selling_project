import React from 'react';
import "./Slides.css";

const Slides = () => {
  return (
    <>
    <div className='slide'  id="top_slide">
    <div id="carouselExampleIndicators" className="carousel slide" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id="Main_slides">
    <div className="carousel-item active">
    {/* <img src={require("../image/6.jpg")} class="d-block w-100 " alt="..."/> */}
      
    </div>
    <div className="carousel-item">
    {/* <img src={require("../image/6.jpg")} class="d-block w-100" alt="..."/> */}
      
    </div>
    <div className="carousel-item">
    {/* <img src={require("../image/6.jpg")} class="d-block w-100 " alt="..."/> */}
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


    </>
  )
}

export default Slides