import React from "react";

export default function About() {
  return <div>

<body>
    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-dark py-3">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white pr-3" href="">FAQs</a>
                        <span className="text-white">|</span>
                        <a className="text-white px-3" href="">Help</a>
                        <span className="text-white">|</span>
                        <a className="text-white pl-3" href="">Support</a>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-white px-3" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-white px-3" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-white px-3" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-white px-3" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-white pl-3" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <div className="container-fluid position-relative nav-bar p-0">
        <div className="container position-relative" style={{zindex: "9"}}>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" className="navbar-brand">
                    <h1 className="m-0 display-5 text-white"><span className="text-primary">i</span>DESIGN</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="project.html" className="nav-item nav-link">Project</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {/* <!-- Navbar End --> */}


    {/* <!-- Under Nav Start --> */}
    <div className="container-fluid bg-white py-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 text-left mb-3 mb-lg-0">
                    <div className="d-inline-flex text-left">
                        <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3"></h1>
                        <div className="d-flex flex-column">
                            <h5>Our Office</h5>
                            <p className="m-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
                    <div className="d-inline-flex text-left">
                        <h1 className="flaticon-email font-weight-normal text-primary m-0 mr-3"></h1>
                        <div className="d-flex flex-column">
                            <h5>Email Us</h5>
                            <p className="m-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
                    <div className="d-inline-flex text-left">
                        <h1 className="flaticon-telephone font-weight-normal text-primary m-0 mr-3"></h1>
                        <div className="d-flex flex-column">
                            <h5>Call Us</h5>
                            <p className="m-0">+012 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Under Nav End --> */}


    {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "800px"}}>
                            <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Creative Interior Design</h4>
                            <h3 className="display-3 text-white mb-md-4">Make Your Home Better</h3>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style= {{maxwidth: "800px"}}>
                            <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Creative Interior Design</h4>
                            <h3 className="display-3 text-white mb-md-4">Stay At Home In Peace</h3>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-primary" style= {{width: "45px", height: "45px"}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-primary" style={{width: "45px", height: "45px"}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    {/* <!-- Carousel End --> */}


    {/* <!-- About Start --> */}
    <div className="container-fluid bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="d-flex flex-column align-items-center justify-content-center bg-primary h-100 py-5 px-3">
                        <i className="flaticon-brickwall display-1 font-weight-normal text-secondary mb-3"></i>
                        <h4 className="display-3 mb-3">25+</h4>
                        <h1 className="m-0">Years Experience</h1>
                    </div>
                </div>
                <div className="col-lg-7 m-0 my-lg-5 pt-5 pb-5 pb-lg-2 pl-lg-5">
                    <h6 className="text-primary font-weight-normal text-uppercase mb-3">Learn About Us</h6>
                    <h1 className="mb-4 section-title">We Are The Best Interior Designing Firm In Your City</h1>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <div className="row py-2">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-house font-weight-normal text-primary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Project Planning</h5>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-stairs font-weight-normal text-primary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Exterior & Interior</h5>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Commercial Design</h5>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-living-room font-weight-normal text-primary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Residential Design</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Services Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 pr-lg-5">
                    <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Awesome Services</h6>
                    <h1 className="mb-4 section-title">Awesome Interior Designing Services For Your Home</h1>
                    <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                    <a href="" className="btn btn-primary mt-3 py-2 px-4">View More</a>
                </div>
                <div className="col-lg-6 p-0 pt-5 pt-lg-0">
                    <div className="owl-carousel service-carousel position-relative">
                        <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                            <h3 className="flaticon-bedroom display-3 font-weight-normal text-primary mb-3"></h3>
                            <h5 className="mb-3">Bedroom Design</h5>
                            <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos</p>
                        </div>
                        <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                            <h3 className="flaticon-kitchen display-3 font-weight-normal text-primary mb-3"></h3>
                            <h5 className="mb-3">Kitchen Design</h5>
                            <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos</p>
                        </div>
                        <div className="d-flex flex-column text-center bg-light mx-3 p-4">
                            <h3 className="flaticon-bathroom display-3 font-weight-normal text-primary mb-3"></h3>
                            <h5 className="mb-3">Bathroom Design</h5>
                            <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}


    {/* <!-- Features Start --> */}
    <div className="container-fluid bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mt-5 py-5 pr-lg-5">
                    <h6 className="text-primary font-weight-normal text-uppercase mb-3">Why Choose Us?</h6>
                    <h1 className="mb-4 section-title">25+ Years Experience In The Interior Design Industry</h1>
                    <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <ul className="list-inline">
                        <li><h5><i className="far fa-check-square text-primary mr-3"></i>25+ Years Experience</h5></li>
                        <li><h5><i className="far fa-check-square text-primary mr-3"></i>Best Interior Design</h5></li>
                        <li><h5><i className="far fa-check-square text-primary mr-3"></i>Customer Satisfaction</h5></li>
                    </ul>
                    <a href="" className="btn btn-primary mt-3 py-2 px-4">View More</a>
                </div>
                <div className="col-lg-5">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                        <img className="h-100" src="img/feature.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Features End --> */}


    {/* <!-- Projects Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col text-center mb-4">
                    <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Projects</h6>
                    <h1 className="mb-4">Some Of Our Awesome Interior Designing Projects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-flters">
                        <li className="btn btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li className="btn btn-outline-primary m-1" data-filter=".first">Complete</li>
                        <li className="btn btn-outline-primary m-1" data-filter=".second">Running</li>
                        <li className="btn btn-outline-primary m-1" data-filter=".third">Upcoming</li>
                    </ul>
                </div>
            </div>
            <div className="row mx-1 portfolio-container">
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                    <div className="position-relative overflow-hidden">
                        <div className="portfolio-img d-flex align-items-center justify-content-center">
                            <img className="img-fluid" src="img/portfolio-1.jpg" alt=""/>
                        </div>
                        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 className="text-white mb-4">Project Name</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-primary m-1" href="">
                                    <i className="fa fa-link"></i>
                                </a>
                                <a className="btn btn-outline-primary m-1" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                    <div className="position-relative overflow-hidden">
                        <div className="portfolio-img d-flex align-items-center justify-content-center">
                            <img className="img-fluid" src="img/portfolio-2.jpg" alt=""/>
                        </div>
                        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 className="text-white mb-4">Project Name</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-primary m-1" href="">
                                    <i className="fa fa-link"></i>
                                </a>
                                <a className="btn btn-outline-primary m-1" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                    <div className="position-relative overflow-hidden">
                        <div className="portfolio-img d-flex align-items-center justify-content-center">
                            <img className="img-fluid" src="img/portfolio-3.jpg" alt=""/>
                        </div>
                        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 className="text-white mb-4">Project Name</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-primary m-1" href="">
                                    <i className="fa fa-link"></i>
                                </a>
                                <a className="btn btn-outline-primary m-1" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                    <div className="position-relative overflow-hidden">
                        <div className="portfolio-img d-flex align-items-center justify-content-center">
                            <img className="img-fluid" src="img/portfolio-4.jpg" alt=""/>
                        </div>
                        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 className="text-white mb-4">Project Name</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-primary m-1" href="">
                                    <i className="fa fa-link"></i>
                                </a>
                                <a className="btn btn-outline-primary m-1" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                    <div className="position-relative overflow-hidden">
                        <div className="portfolio-img d-flex align-items-center justify-content-center">
                            <img className="img-fluid" src="img/portfolio-5.jpg" alt=""/>
                        </div>
                        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 className="text-white mb-4">Project Name</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-primary m-1" href="">
                                    <i className="fa fa-link"></i>
                                </a>
                                <a className="btn btn-outline-primary m-1" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                    <div className="position-relative overflow-hidden">
                        <div className="portfolio-img d-flex align-items-center justify-content-center">
                            <img className="img-fluid" src="img/portfolio-6.jpg" alt=""/>
                        </div>
                        <div className="portfolio-text bg-secondary d-flex flex-column align-items-center justify-content-center">
                            <h4 className="text-white mb-4">Project Name</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="btn btn-outline-primary m-1" href="">
                                    <i className="fa fa-link"></i>
                                </a>
                                <a className="btn btn-outline-primary m-1" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Projects End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-fluid bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
                        <h6 className="text-white font-weight-normal text-uppercase mb-3">Our Team</h6>
                        <h1 className="mb-0 text-center">Meet Our Team Members</h1>
                    </div>
                </div>
                <div className="col-md-8 col-sm-6 p-0 py-sm-5">
                    <div className="owl-carousel team-carousel position-relative p-0 py-sm-5">
                        <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: "38px", height: "38px"}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: "38px", height: "38px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-primary text-center px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                                <h5 className="text-white">Name Goes Here</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: "38px", height: "38px"}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: "38px", height: "38px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-primary text-center px-0" style={{width: "38px", height: "38px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                                <h5 className="text-white">Name Goes Here</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style={{width: "38px", height: "38px"}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-primary text-center px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                                <h5 className="text-white">Name Goes Here</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                        <div className="team d-flex flex-column text-center mx-3">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/team-4.jpg" alt=""/>
                                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-primary text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-primary text-center px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="d-flex flex-column bg-secondary text-center py-3">
                                <h5 className="text-white">Name Goes Here</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


    {/* <!-- Testimonial Start --> */}
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-7 py-5 pr-md-5">
                    <h6 className="text-primary font-weight-normal text-uppercase mb-3 pt-5">Testimonial</h6>
                    <h1 className="mb-4 section-title">What Our Clients Say</h1>
                    <div className="owl-carousel testimonial-carousel position-relative pb-5 mb-md-5">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style= {{width: "60px", height: "60px"}} alt=""/>
                                <div className="ml-3">
                                    <h5>Client Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                            <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style= {{width: "60px", height: "60px"}} alt=""/>
                                <div className="ml-3">"
                                    <h5>Client Name</h5>
                                    <i>Profession</i>
                                </div>
                            </div>
                            <p className="m-0">Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                        <img className="h-100" src="img/testimonial.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}


    {/* <!-- Blog Start --> */}
    <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col text-center mb-4">
                    <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Blog</h6>
                    <h1 className="mb-4">Read The Latest News & Articles From Our Blog</h1>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src="img/blog-1.jpg" alt=""/>
                        <div className="card-body bg-white p-4">
                            <div className="d-flex align-items-center mb-3">
                                <a className="btn btn-primary" href=""><i className="fa fa-link"></i></a>
                                <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                            </div>
                            <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                            <div className="d-flex">
                                <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src="img/blog-2.jpg" alt=""/>
                        <div className="card-body bg-white p-4">
                            <div className="d-flex align-items-center mb-3">
                                <a className="btn btn-primary" href=""><i className="fa fa-link"></i></a>
                                <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                            </div>
                            <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                            <div className="d-flex">
                                <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card border-0 mb-2">
                        <img className="card-img-top" src="img/blog-3.jpg" alt=""/>
                        <div className="card-body bg-white p-4">
                            <div className="d-flex align-items-center mb-3">
                                <a className="btn btn-primary" href=""><i className="fa fa-link"></i></a>
                                <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                            </div>
                            <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                            <div className="d-flex">
                                <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                                <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                                <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}


    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Get In Touch</h4>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style= {{width: "38px", height: "38px"}} href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Projects</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Projects</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Newsletter</h4>
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control border-0" placeholder="Your Name" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control border-0" placeholder="Your Email" required="required" />
                    </div>
                    <div>
                        <button className="btn btn-lg btn-primary btn-block border-0" type="submit">Submit Now</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="container border-top border-secondary pt-5">
            <p className="m-0 text-center text-white">
                &copy; <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
                <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
            </p>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>


    {/* <!-- JavaScript Libraries --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    {/* <!-- Contact Javascript File --> */}
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>
</body>


  </div>;
}