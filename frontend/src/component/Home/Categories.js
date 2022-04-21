import React from 'react'
import "./Categories.css"

export const Categories = () => {
    return (
        <div>
            <h2 className='homeHeading'>Featured Categories</h2>
            <main className="categories-container container d-flex">
                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                        <img src="https://ik.imagekit.io/onelife0033/Shirt-10_6MP0jHwph.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650518620654" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">T-shirts</h5>
                        <a href="#!" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Shop now</a>
                    </div>
                </div>

                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                        <img src="https://ik.imagekit.io/onelife0033/camouflage-cargo-pants_y4wOul5AT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650518757484" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Trousers</h5>
                        <a href="#!" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Shop now</a>
                    </div>
                </div>

                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                        <img src="https://ik.imagekit.io/onelife0033/cap.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650519063406" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Caps</h5>
                        <a href="#!" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Shop now</a>
                    </div>
                </div>

                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                        <img src="https://ik.imagekit.io/onelife0033/sports_man_l8TXZ-qLQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650519590319" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Men</h5>
                        <a href="#!" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Explore</a>
                    </div>
                </div>

                <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                        <img src="https://ik.imagekit.io/onelife0033/sports_women_XRnXXf2hQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650519893401" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">Women</h5>
                        <a href="#!" class="btn btn-outline-dark" data-mdb-ripple-color="dark">Explore</a>
                    </div>
                </div>





            </main>
        </div>
    )
}
