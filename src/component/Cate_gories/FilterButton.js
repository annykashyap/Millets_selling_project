import React from "react";

function FilterButton() {
  return (
    <>
      <div className="container mt-5 mb-3" >
        <div className="col " >
          <div
            className="border border-dark  m-2"
            style={{ backgroundColor: "lightgreen" }}
          >
            <div className="row m-4">
              <div className="col-6 ">
                <h5 className=" text-start ">Price</h5>
              </div>
              <div className="col-4">
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                    <h5>Low to High</h5>

                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                    <h5>High to Low</h5>

                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                    <h5>Best seller</h5>
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-6 ">
                <h5 className=" text-start ">Newest first</h5>
              </div>
              <div className="col-3">
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-6">
                <h5 className="text-start">Popularity </h5>
              </div>
              <div className="col-3">
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-6 m-4">
              <button type="button" class="btn btn-success">
              <h5>Apply</h5>
              </button>
            </div>
            <div className="col-3 m-4">
              <button type="button" class="btn btn-success">
              <h5>Cancel</h5>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterButton;
