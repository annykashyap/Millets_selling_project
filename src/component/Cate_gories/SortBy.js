import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
function SortBy() {
  const [data, setData] = useState(0);
  return (
    <>
      <div className="container mb-4">
        <div className="col-9 ">
          <div
            className="border  border-dark  m-5"
            style={{ backgroundColor: "lightgreen" }} >
            <div className="row m-4">
              <div className="col-4 mt-4">
                <h2 className=" text-start ">Price</h2>
              </div>
              <div className="col-8">
                <div className="row justify-content-between">
                  <div className="col ">
                      <h5> 100</h5>
                  </div>
                  <div className="col">
                    <h5>{data}</h5>
                  </div>
                </div>
                <div className="row-4 ">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    style={{ height: "2px", width: "350px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-4 mt-4">
                <h2 className=" text-start ">Quantity</h2>
              </div>
              <div className="col-8">
                <div className="row justify-content-between">
                  <div className="col ">
                      <h5> 100</h5>
                  </div>
                  <div className="col">
                    <h5>{data}</h5>
                  </div>
                </div>
                <div className="row-4 ">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    style={{ height: "2px", width: "350px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-4 mt-4">
                <h2 className="text-start">Weight </h2>
              </div>
              <div className="col-8">
                <div className="row justify-content-between">
                  <div className="col ">
                      <h5> 100gm</h5>
                  </div>
                  <div className="col">
                    <h5>{data}kg</h5>
                  </div>
                </div>
                <div className="row-4 ">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    style={{ height: "2px", width: "350px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row m-4">
              <div className="col-4 mt-4">
                <h2 className="text-start">Rating </h2>
              </div>
              <div className="col-8 mt-3">
                <div className="row  justify-content-between">
                  <div className="col ">
                      <h5>
                        1<AiFillStar />
                        &above
                      </h5>
                  </div>
                  <div className="col ">
                    <h5>
                      {data}
                      <AiFillStar />
                      &above
                    </h5>
                  </div>
                </div>
                <div className="row-4 ">
                  <input
                  
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    style={{ height: "2px", width: "350px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m-4">
                <button type="button" class="btn btn-success">
                  <h5>Apply Filter</h5>
                </button>
              </div>
              <div className="col m-4">
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

export default SortBy;