import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-light">
      {/* <!-- Grid container --> */}
      <div class="container p-4">
        {/* <!-- Section: Social media --> */}
        <section class="">
          {/* <!-- Facebook --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-facebook-f"></i
          ></a>

          {/* <!-- Twitter --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-twitter"></i
          ></a>

          {/* <!-- Google --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-google"></i
          ></a>

          {/* <!-- Instagram --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-instagram"></i
          ></a>

          {/* <!-- Linkedin --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-linkedin-in"></i
          ></a>

          {/* <!-- Github --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-github"></i
          ></a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      <form action="/" className="container newsletter-form d-flex flex-wrap">
        <div>
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        <div class="form-outline form-white">
          <input type="email" id="typeEmail" class="form-control email-input" />
          <label class="form-label email-label text-light" for="typeEmail">Email address</label>
        </div>
        <div>
          <button type="submit" class="btn btn-outline-light">Subscribe</button>
        </div>
      </form>

      {/* <!-- Section: Text --> */}
      <section class="container mb-4">
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
          eum harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>
      {/* <!-- Section: Text --> */}

      {/* <!-- Section: Links --> */}
      <section class="">
        {/* <!--Grid row--> */}
        <div class="row container">
          {/* <!--Grid column--> */}
          <div class="col-md-4">
            <h5 class="text-uppercase">Products</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-muted">T-shirts</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Trousers</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Caps</a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-md-4">
            <h5 class="text-uppercase">For customers</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-muted">Your Account</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Shipping rates and policy</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Refunds and Replacements</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Delivery info</a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-md-4">
            <h5 class="text-uppercase">Company</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-muted">About Us</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Contacts</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Careers</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Affiliates</a>
              </li>
              <li>
                <a href="#!" class="text-muted">Support</a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      {/* <!-- Copyright --> */}
      <div class="text-center copyright p-3">
        © {new Date().getFullYear()} Copyright:
        <a class="text-white" href="#"> NEON.com</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer >

  );
};

export default Footer;
