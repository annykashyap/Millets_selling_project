import React from 'react'
import { MdEdit } from "react-icons/md";
const Manage_Address = () => {
  
 
  return (
    <div className="tab-pane fade show " id="manage-address-tab-pane" role="tabpanel" aria-labelledby="manage-address-tab" tabindex="0">
    <h1>Manage Address</h1>
    <form  >
    <div className="form-group">
<label for="exampleInputName1">Name</label>
<div className='d-flex justify-content-center  align-items-center'> 
<input type="text" className="form-control" id="exampleInputName1" name="name"/>
<button className='btn btn-success Edit_btn'><MdEdit  /></button>
</div>

</div>
<div className="form-group mt-3">
<label for="exampleInputName2">Last Name</label>
<div className='d-flex justify-content-center  align-items-center'>
<input type="text" className="form-control " id="exampleInputName2" name="lname"/>
<button className='btn btn-success Edit_btn'> <MdEdit /></button>
</div>
</div>
<div className="form-group mt-3">
<label for="exampleInputEmail1">Email address</label>
<div className='d-flex justify-content-center  align-items-center' >
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
<button className='btn btn-success Edit_btn'> <MdEdit className='Md_icon' /></button>
</div>
</div>
<div className="form-group mt-3">
<label for="exampleInputNumber">Number</label>
<div className='d-flex justify-content-center  align-items-center'>
<input type="text" className="form-control" id="exampleInputNumber" name="number" />
<button className='btn btn-success Edit_btn'><MdEdit /></button>
</div>
</div>
<div className="form-group mt-3">
<label for="exampleInputaddress">Address</label>
<div className='d-flex justify-content-center  align-items-center'>
<input type="text" className="form-control" id="exampleInputaddress" name="address"/>
<button className='btn btn-success Edit_btn'><MdEdit /></button>

</div>
</div>
<button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>

      </div>
  )
}

export default Manage_Address