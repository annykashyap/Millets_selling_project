import React from 'react'
import { MdDelete } from "react-icons/md";


const Whishlist = () => {
  return (
    <div className="tab-pane fade show " id="whishlist-tab-pane" role="tabpanel" aria-labelledby="whishlist-tab" tabindex="0">
    <h1>My Wishlist</h1>
  <table className="table table-borderless mt-5  text-center">
{/* <thead>
<tr>
<th scope="col">Sr.no</th>
<th scope="col">Name</th>
<th scope="col">Quantity</th>
<th scope="col">Weight</th>
<th scope="col">Price</th>
<th scope="col">Delivery</th>
</tr>
</thead> */}
<tbody>
<tr>
<th scope="row"><img src={require("../../image/flour.jpg")} style={{width:'60px',height:'60px'}}/></th>
<td>flour</td>
<td>1</td>
<td>1Kg</td>
<td>Rs.654</td>
<td className='d-flex justify-content-evenly align-self-center'><button className='btn btn-success'>Buy</button><button className='btn btn-danger'><MdDelete /></button></td>

</tr>
<tr>
<th scope="row"><img src={require("../../image/Rice.jpg")} style={{width:'60px',height:'60px'}}/></th>
<td>Rice</td>
<td>1</td>
<td>1kg</td>
<td>Rs.114</td>
<td className='d-flex justify-content-evenly align-self-center'><button className='btn btn-success'>Buy</button><button className='btn btn-danger'><MdDelete /></button></td>
</tr>

</tbody>
</table>
    </div>
  )
}

export default Whishlist