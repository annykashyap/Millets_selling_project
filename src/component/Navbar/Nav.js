import React from "react";
import "./Nav.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg"  id="topnavbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require("../../image/new_logo.png")} />
          </a>
          <button
            className="navbar-toggler"
            style={{ fontSize: "15px" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Millets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/flour">
                  Flour
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/rice">
                  Rice
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/oil">
                  Oil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ghee">
                  Ghee
                </Link>
              </li>
            </ul>
            <form
              className="d-flex justify-content-center align-item-center"
              role="search"
              id="navform"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger mybtn" type="submit">
                <IoSearchSharp />
              </button>
            </form>
            <div className="second_nav">
              <ul className="navbar-nav me-3 mb-2 mb-lg-0" id="social_icons">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    <FaLocationDot />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    <IoCall />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    <FaRegHeart />
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/cart">
                    <FaCartPlus />
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    <FaUserCircle />
                  </a>
                </li> */}
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                 < FaUserCircle />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/myphonesing">
                        Log In
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/sidetab">
                        Personal Information
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/sidetab">
                        Your Orders
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/sidetab">
                        My Whishlist
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className="nav-link" to="/sidetab">
                        Manage Address
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
