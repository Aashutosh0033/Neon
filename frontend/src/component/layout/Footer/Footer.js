import React from "react";

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
          <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
          ><i className="fab fa-facebook-f"></i
          ></a>

          {/* <!-- Twitter --> */}
          <a className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-twitter"></i
          ></a>

          {/* <!-- Google --> */}
          <a className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-google"></i
          ></a>

          {/* <!-- Instagram --> */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/_neon_fit?igshid=YmMyMTA2M2Y="  role="button"
          ><i className="fab fa-instagram"></i
          ></a>

          {/* <!-- Linkedin --> */}
          <a className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-linkedin-in"></i
          ></a>
          <a className="btn btn-outline-light btn-floating m-1" to="/" role="button"
          ><i className="fab fa-whatsapp"></i
          ></a>

          

          
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
        {/* <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
          eum harum corrupti dicta, aliquam sequi voluptate quas.
        </p> */}

      {/* <img
          src="https://ik.imagekit.io/onelife0033/cover_pg_zz7Gw9jAJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650290508700"
          height="50"
          width = "100"
          alt="NEON Logo"
          loading="lazy"
      /> */}
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
                <Link to="/account" className="text-muted">Your Account</Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="text-muted">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/replacement" className="text-muted">Refunds and Replacements</Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted">Delivery info</Link>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Company</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/about" className="text-muted">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted">Contacts</Link>
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
        <Link className="text-white" to="/"> neonfit.store</Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer >
  );
};

export default Footer;
