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
import { Partner } from "./Partner"
import Footer from "../layout/Footer/Footer"

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
                <h1>This is only for Top 1%.</h1>
                <p>
                Neon is a fitness apparel brand which have come with an objective of increasing the comfort level of athletes while performing workouts. 
                Neon is continuously focusing on creating various editions & designs but just quantity sufficient of 100 pieces (1/100). 
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
            <Testimonials />
            <Footer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;


              
                
              
