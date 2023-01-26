import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Shop from "./Shop";

export default function Index() {
  return (
    <>
      <div className="banner_section layout_padding">
        <div className="container">
          <div
            id="costum_slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="furniture_text">FURNITURE SHOP</h1>
                {/* <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p> */}
                <div className="contact_bt_main">
                  <div className="contact_bt">
                    <a href="contact.html">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <h1 className="furniture_text">BAKERY SHOP</h1>
                <p className="there_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  fo
                </p> */}
                <div className="contact_bt_main">
                  <div className="contact_bt">
                    <a href="contact.html">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <h1 className="furniture_text">BAKERY SHOP</h1>
                <p className="there_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  fo
                </p> */}
                <div className="contact_bt_main">
                  <div className="contact_bt">
                    <a href="contact.html">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#costum_slider"
              role="button"
              data-slide="prev"
            >
              <i className="">
                <img src="assets/images/left-arrow.png" />
              </i>
            </a>
            <a
              className="carousel-control-next"
              href="#costum_slider"
              role="button"
              data-slide="next"
            >
              <i className="">
                <img src="assets/images/right-arrow.png" />
              </i>
            </a>
          </div>
        </div>
      </div>

      {/* services */}

      <Services />

      {/* about */}

      <About />

      {/* shop */}

      <Shop />

      <div className="who_section layout_padding">
        <div className="container">
          <h1 className="who_taital">who we are ?</h1>
          <h4 className="designer_text">DESIGNERS & INNOVATORS</h4>
          <p className="lorem_ipsum_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="get_bt_main">
          <div className="get_bt">
            <a href="#">Get A Quote</a>
          </div>
        </div>
      </div>

      <div className="projects_section layout_padding">
        <div className="container">
          <h1 className="our_text">Our Details</h1>
          <p className="ipsum_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="projects_section2">
                  <div className="container_main2">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="container_main1">
                          {/* <img src="assets/images/img-4.png" alt="Avatar" className="image" style={{width:"100%"}} /> */}
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          {/* <img src="assets/images/img-5.png" alt="Avatar" className="image" style={{width:"100%"}} /> */}
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          {/* <img src="assets/images/img-6.png" alt="Avatar" className="image" style={{width:"100%"}} /> */}
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="projects_section2">
                  <div className="container_main1">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-4.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-5.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-6.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="projects_section2">
                  <div className="container_main1">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-4.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-5.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-6.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="clients_section layout_padding">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}

      <Contact />
    </>
  );
}
