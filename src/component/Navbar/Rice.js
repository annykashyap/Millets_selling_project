import React from 'react'
import Nav from './Nav';
import Rice_carousel_json from '../Card_carousel/Rice_carousel_json';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rice = () => {
  return (
    <>
    <Nav/>
    
    <Rice_carousel_json/>
    </>
  )
}

export default Rice;