import React from "react";
import Nav from "../Navbar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
function Paymentpage() {
  return (
    <>
    <Nav/>
      <div className="container p-4 text-center bg-secondary-subtle">
        <div className="row m-5 p-3  bg-warning">
          <div className="col-1 p-3 text-center">
            <h2 className="bg-dark-subtle ">1</h2>
          </div>
          <div className="col text-start text-light">
            <h4>Login</h4>
            <h4>Yunus Khan +88514941**</h4>
          </div>
          <div className="col-2 p-3">
            <button type="button" class="btn btn-outline-light">
              Change
            </button>
          </div>
        </div>
        <div className="row m-5 p-3  bg-info">
          <div className="col-1 p-3 text-center">
            <h2 className="bg-dark-subtle ">2</h2>
          </div>
          <div className="col text-start text-light">
            <h4>Delivery Address</h4>
            <h5>Rafiqabad ,Dasana,Ghaziabad,Uttar Pardesh 201015 india </h5>
            <div className="col-3 p-3">
              <button type="button" class="btn btn-outline-light">
                Delivery Here
              </button>
            </div>
          </div>
          <div className="col-2 p-3">
            <button type="button" class="btn btn-outline-light">
              Change
            </button>
          </div>
        </div>
        <div className="row m-5 p-3 bg-warning">
          <div className="col-1 p-3 text-center">
            <h2 className="bg-dark-subtle ">3</h2>
          </div>
          <div className="col-2 p-3 text-center ">
            <img
              src={require("../../image/flour.jpg")}
              class="rounded-circle border border-secondary"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="row">
            <div className="col-3 rounded-circle border border-2 border-dark" style={{ height: "35px" }}><h2 className="text-center">-</h2></div>
            <div className="col-5 "><h2>2</h2></div>
            <div className="col-3  rounded-circle border border-2 border-dark"  style={{ height: "35px" }}><h2  className="text-center">+</h2></div>
            </div>


          </div>
          <div className="col text-start text-light" id="content_section">
            <h4 id="content_section_heading">Lorem ipsum dolor sit amet</h4>
            <h5 id="content_section_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea .
            </h5>
          </div>
          <div className="col-2 p-3">
            <button type="button" class="btn btn-outline-light">
              Change
            </button>
          </div>
        </div>
        <div className="row m-5 p-3  bg-info">
          <div className="col-1 p-3 text-center">
            <h2 className="bg-dark-subtle ">4</h2>
          </div>
          <div className="col p-3 text-start text-light">
            <h4>Payment Options</h4>
          </div>
          <div className="row mt-4 ms-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <div class=" text-start text-light ps-5">
                <h4>UPI</h4>
              </div>
            </div>
          </div>
          <div className="row mt-4 ms-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <div class=" text-start text-light ps-5">
                <h4>Credit/Debit/ATM card</h4>
              </div>
            </div>
          </div>
          <div className="row mt-4 ms-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <div class="text-start text-light ps-5">
                <h4>Net Banking</h4>
              </div>
            </div>
          </div>
          <div className="row mt-4 ms-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <div class="text-start text-light ps-5">
                <h4>Cash on Delivery</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paymentpage;
