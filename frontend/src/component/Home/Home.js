import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { Testimonials } from "./Testimonials";
import {Partner} from "./Partner"

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="NEON" />

          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <Link href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </Link>
          </div> */}

          {/* <!-- Showcase --> */}
          <section className="section-a">
            <div className="container">
              <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
                  commodi placeat ea itaque modi corrupti corporis nam voluptas aut
                  reprehenderit eaque culpa.
                </p>
                <Link to="/about" className="bttn">Learn More</Link>
              </div>
              <img src="https://ik.imagekit.io/onelife0033/Running-fliped.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650422250319" alt="" />
            </div>
          </section>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}

              <div className="container"><Link type="button" to="/products" className="btn btn-primary btn-rounded">Shop Now</Link></div>
          </div>
          <Partner/>
          <Testimonials/>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
