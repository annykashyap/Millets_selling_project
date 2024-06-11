import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  return (
    <>
    <Nav/>
      <div className="container  mb-4">
        <div className="row mt-5 mb-4 border border-dark rounded">
          <div
            className="col-5  loginclass img-fluid img-thumbnail"
            style={{
              backgroundColor: "#07492bf5",
              height: "50%",
            }}
          >
            <div className="row m-5  text-start text-light">
              <h1>Signup</h1>
            </div>
            <div className="row m-5 me-0 mb-0 text-start text-light">
              <h4>Get access to your Orders, Wishlist and Recommendations</h4>
            </div>
            <img
              src={require("../../image/authentication.png")}
              style={{ height: "30%", width: "100%" }}
              className=""
            />
          </div>
          <div className="col-7 bg-secondary-subtle pt-4">
            <div className="form-data mt-5">
              <form>
                <div className="">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black"
                  >
                    <h5>Mobile number</h5>
                  </label>
                  <div className="row m-1 border border-dark border-end-0 border-start-0 border-top-0 ">
                      <div class="input-group opacity-1 border border-dark border-end-0 border-start-0 border-top-0 ">
                        <input
                          type="text"
                          class="form-control bg-secondary-subtle border-0"
                          placeholder="+91"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"/>
                        <button
                          class="btn btn-outline-secondary text-primary border-0 "
                          type="button"
                          id="button-addon2">
                          <h5> Change</h5>
                        </button>
                      </div>
                  </div>
                </div>
                <div className="mt-5 mb-0">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black"
                  >
                    <h5>OTP sent to Mobile</h5>
                  </label>
                  <div className="row m-1 border border-dark border-end-0 border-start-0 border-top-0 ">
                      <div class="input-group opacity-1 border border-dark border-end-0 border-start-0 border-top-0 ">
                        <input
                          type="text"
                          class="form-control m-0 bg-secondary-subtle border-0"
                          placeholder="Enter OTP"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"/>
                        <button
                          class="btn btn-outline-secondary text-primary border-0 "
                          type="button"
                          id="button-addon2">
                         <h5>  Resend</h5>
                        </button>
                      </div>
                  </div>
                </div>

                <div className="row mt-5 m-1">
                  <button
                    type="submit"
                    className="btn  "
                    style={{ backgroundColor: "  #07492bf5" }}
                  >
                    <h5 className="text-light">Request OTP</h5>
                  </button>
                </div>

                <div className="row mt-5 m-1">
                  <button type="submit" className="btn btn btn-light text-dark">
                    {/* <h4 className="">Exsisting User ? Login</h4> */}
                  <h4><Link to="/login" className="nav-link">Exciting User ? Login</Link></h4>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
