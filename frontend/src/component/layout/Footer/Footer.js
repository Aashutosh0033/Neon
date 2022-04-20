import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-light">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}
        <section className="">
          {/* <!-- Facebook --> */}
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-facebook-f"></i
          ></Link>

          {/* <!-- Twitter --> */}
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-twitter"></i
          ></Link>

          {/* <!-- Google --> */}
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-google"></i
          ></Link>

          {/* <!-- Instagram --> */}
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-instagram"></i
          ></Link>

          {/* <!-- Linkedin --> */}
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-linkedin-in"></i
          ></Link>

          {/* <!-- Github --> */}
          <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-github"></i
          ></Link>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      <form action="/" className="container newsletter-form d-flex flex-wrap">
        <div>
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        <div className="form-outline form-white">
          <input type="email" id="typeEmail" className="form-control email-input" />
          <label className="form-label email-label text-light" for="typeEmail">Email address</label>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-light">Subscribe</button>
        </div>
      </form>

      {/* <!-- Section: Text --> */}
      <section className="container mb-4">
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
          eum harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>
      {/* <!-- Section: Text --> */}

      {/* <!-- Section: Links --> */}
      <section className="">
        {/* <!--Grid row--> */}
        <div className="row container">
          {/* <!--Grid column--> */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Products</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-muted">T-shirts</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Trousers</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Caps</Link>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-md-4">
            <h5 className="text-uppercase">For customers</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-muted">Your Account</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Shipping rates and policy</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Refunds and Replacements</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Delivery info</Link>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Company</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-muted">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Contacts</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Careers</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Affiliates</Link>
              </li>
              <li>
                <Link to="/" className="text-muted">Support</Link>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center copyright p-3">
        © {new Date().getFullYear()} Copyright:
        <Link className="text-white" to="/"> NEON.com</Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer >
  );
};

export default Footer;
