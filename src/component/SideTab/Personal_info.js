import React, { useState } from "react";

const Personal_info = () => {
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    number: "",
    address: "",
  });
  const [tableData, settableData] = useState([]);
  const [editclick, seteditclick] = useState(false);
  const [editindex, seteditindex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editclick) {
      const temptabledata = tableData;
      Object.assign(temptabledata[editindex], inputs);
      settableData([...temptabledata]);
      seteditclick(false);
    } else {
      settableData([...tableData, inputs]);

      setInputs({
        name: "",
        lastname: "",
        email: "",
        number: "",
        address: "",
      });
    }

    // console.log('inputs',inputs);
  };
  console.log("tableData", tableData);

  const handeleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    settableData(filterData);
  };
  const handleEdit = (index) => {
    const tempdata = tableData[index];
    console.log("tempdata", tempdata);
    setInputs({
      name: tempdata.name,
      lastname: tempdata.lastname,
      email: tempdata.email,
      number: tempdata.number,
      address: tempdata.address,
    });
    seteditclick(true);
    seteditindex(index);
  };

  return (
    <div
      className="tab-pane fade show active"
      id="personal-tab-pane"
      role="tabpanel"
      aria-labelledby="personal-info-tab"
      tabindex="0"
    >
      <h1>personal Information</h1>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputName1">Name</label>
          <input
            type="text"
            className="form-control "
            id="exampleInputName1"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputName2">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName2"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputNumber">Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNumber"
            name="number"
            value={inputs.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputaddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputaddress"
            name="address"
            value={inputs.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          {editclick ? "update" : "Submit"}{" "}
        </button>
      </form>
      <table className="table w-full" style={{ height: "500px" }}>
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.address}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handeleDelete(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <h1>
    {tableData.map((item)=>(
        <p>{item.name}</p>
    ))}
</h1> */}
    </div>
  );
};

export default Personal_info;
