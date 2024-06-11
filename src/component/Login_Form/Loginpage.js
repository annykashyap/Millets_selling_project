import React from "react";
import Nav from "../Navbar/Nav";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Loginpage() {
  return (
    <>
    <Nav/>
      <div className="container  mb-4">
        <div className="row mt-5 mb-4 border border-dark rounded">
          <div className="col-5  loginclass img-fluid img-thumbnail"
            style={{
              backgroundColor: "#07492bf5",
              height:"50%"
            }}
          >
            <div className="row m-5  text-start text-light">
              <h1>LogIn</h1>
            </div>
            <div className="row m-5 mb-0 text-start text-light">
              <h3>Get access to your Orders, Wishlist and Recommendations</h3>
            </div>
            <img src={require("../../image/authentication.png")} style={{height:"30%", width:"100%"}} className="" />
          </div>
          <div className="col-7 bg-secondary-subtle pt-4">
            <div className="form-data mt-5">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black"
                  >
                    <h5>Enter Email/Mobile number</h5>
                  </label>
                  <div className="border border-dark border-end-0 border-start-0 border-top-0">
                    <input
                      type="email"
                      className="form-control border border-end-0 border-start-0 border-top-0 border-bottom-0 "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="row">
                    <p>
                      By continuing, you agree to Bharat Millets Terms of use
                      and Privacy Policy
                    </p>{" "}
                  </div>
                </div>

                <div className="row">
                  <button
                    type="submit"
                    className="btn "
                    style={{ backgroundColor: "  #07492bf5" }}
                  >
                    <h5 className="text-light">Request OTP</h5>
                  </button>
                  <div className="col  d-flex text-center text-primary align-items-end" style={{height:"400px"}}><Link to="/signup" className="nav-link">New to Bharat Millets? Create New Account</Link></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Loginpage;
