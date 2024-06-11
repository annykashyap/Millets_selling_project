import React from 'react'

const Orders = () => {
  return (
    
    <div className="tab-pane fade show " id="orders-tab-pane" role="tabpanel" aria-labelledby="orders-tab" tabindex="0">
    <h1>Your Orders</h1>
    <table className="table table-borderless mt-5 table-bordered text-center">
<thead>
<tr>
<th scope="col">Sr.no</th>
<th scope="col">Name</th>
<th scope="col">Quantity</th>
<th scope="col">Weight</th>
<th scope="col">Price</th>
<th scope="col">Delivery</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>OAT</td>
<td>1</td>
<td>1Kg</td>
<td>Rs.654</td>
<td>wed, 1st feb 2024</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Rice</td>
<td>1</td>
<td>1kg</td>
<td>Rs.114</td>
<td>wed, 1st feb 2024</td>
</tr>

</tbody>
</table>


    </div>
  )
}

export default Orders