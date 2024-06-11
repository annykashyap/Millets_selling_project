import React, { useState } from 'react';
import "./SideTab.css";
import Nav from '../Navbar/Nav';
import Personal_info from './Personal_info';
import Manage_Address from './Manage_Address';
import Orders from './Orders';
import Whishlist from './Whishlist';

const SideTab = () => {
 return (
    <>
    <Nav/>
    <div className='SideTab1 '>
      {/* --------------------------------------------Side_Tab_section */}
        <div className='div1'>
          <div className='inside_div1'>
          <div className='profile_div'>
            <div className='profile_img'>

            </div>
            
            </div>
      {/* -------------------------------------------------------Side_Tab_content */}
          <div className='content'>
          <ul className="nav nav-tabs flex-column vertical-tabs" id="myTab" role="tablist" style={{borderBottom:0}}>
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="personal-info-tab" data-bs-toggle="tab" data-bs-target="#personal-tab-pane" type="button" role="tab" aria-controls="personal-tab-pane" aria-selected="true" style={{border:"none"}}>Personal Information</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders-tab-pane" type="button" role="tab" aria-controls="orders-tab-pane" aria-selected="false" style={{border:"none"}}>Your Orders</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="whishlist-tab" data-bs-toggle="tab" data-bs-target="#whishlist-tab-pane" type="button" role="tab" aria-controls="whishlist-tab-pane" aria-selected="false" style={{border:"none"}}>My whishlist</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="manage-address-tab" data-bs-toggle="tab" data-bs-target="#manage-address-tab-pane" type="button" role="tab" aria-controls="manage-address-tab-pane" aria-selected="false" style={{border:"none"}} >Manage Address</button>
  </li>
</ul>
            </div>
          {/* ------------------------------------Side_tab_content_End */}
        </div>
        </div>
        {/* -------------------------------------------Side_tab_section_End */}
        <div className='div2'>
          
          <div className='inside_div2 container'>
            
          
          <div className="tab-content container" id="myTabContent">
           
      <Personal_info/>

<Manage_Address/>
<Orders/>

            <Whishlist/>
            
            

          </div>
            </div>
            </div>
    </div>
    </>
  )
}

export default SideTab;