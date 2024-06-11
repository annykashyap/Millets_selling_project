import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Form/Form.css";
function Form() {
  return (
    <>
      <div className="container text-center mt-5 mb-4">
        <div className="row mt-5 mb-4 border border-dark rounded">
          <div className="col">
            <div className="myrow">
              <div className="row mt-4 mb-5">
                <div className="col col-lg-2">
                  <img
                    src={require("../../image/new_logo.png")}
                    style={{ width: "70px" }}
                  />
                </div>
                <div className="col-md-auto">
                  <h1>BHARAT MILLETS</h1>
                </div>
              </div>

              <div className="form-data">
                <h3>
                  Artifical Intelligence giving you travel recommendations
                </h3>
                <p>welcome back please login to your account</p>
                <div>
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        style={{ backgroundColor: "  #07492bf5" }}/>
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                        >
                        Remember me
                      </label>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button type="submit" className="btn text-light" style={{ backgroundColor: "  #07492bf5" }}>
                          Login
                        </button>
                      </div>
                      <div className="col">
                        {" "}
                        <button type="submit" className="btn text-light" style={{ backgroundColor: "  #07492bf5" }}>
                          Sing Up
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col">
                      <p>or,login with</p>
                    </div>
                    <div className="col">FaceBook</div>
                    <div className="col">Linked In</div>
                    <div className="col">Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col loginclass img-fluid img-thumbnail" style={{ backgroundColor: " #f5bd6968" ,boxSizing:"border-box", padding:"50px 10px 20px 10px"}}>
            <img src={require("../../image/login_image.png")} className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
