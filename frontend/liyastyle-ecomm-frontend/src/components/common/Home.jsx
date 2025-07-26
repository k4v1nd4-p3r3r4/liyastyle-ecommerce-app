import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Logo from "../../assets/image/logo-b.png";
import Banner from "../../assets/image/banner1.png";
import Banner2 from "../../assets/image/banner2.png";

export const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="bg-dark text-center">
          <span className="text-white ">Your Fashion Partner</span>
        </div>
        <div className="container">
          <Navbar expand="lg" className="">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src={Logo} alt="" width={100} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                  <Nav.Link href="#action1">Woman</Nav.Link>
                  <Nav.Link href="#action2">Men</Nav.Link>
                  <Nav.Link href="#action2">Kids</Nav.Link>
                </Nav>
                <div className="nav-right d-flex">
                  <a href="#" className="ms-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="28"
                      fill="currentColor"
                      className="bi bi-bag" // changed from class to className
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                    </svg>
                  </a>
                  <a href="#" className="ms-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-person" // changed from class to className
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                    </svg>
                  </a>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>

      <section className="section-1" style={{ position: "relative" }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div
              className="content interactive-slide"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "650px",
                width: "100%",
                transition: "transform 0.3s",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="content interactive-slide"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "650px",
                width: "100%",
                transition: "transform 0.3s",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
        <div className="hero-sticky-content">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Discover Your Style
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Shop the latest trends in fashion for everyone.
          </p>
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </div>
      </section>

      <section className="section-2 py-5">
        <div className="container p-4">
          <h2>New Arrivales</h2>
          <div className="row">
            {[...Array(12)].map((_, idx) => (
              <div className="col-6 col-md-3 mb-4" key={idx}>
                <div className="card interactive-card h-100">
                  <img
                    src={`https://picsum.photos/200/200?random=${idx + 1}`}
                    className="card-img-top"
                    alt={`Product ${idx + 1}`}
                    style={{ objectFit: "cover", height: "160px" }}
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h6 className="card-title mb-1">Product {idx + 1}</h6>
                    <p className="card-text mb-2" style={{ fontSize: "0.85em", color: "#555" }}>
                      This is a stylish product perfect for your wardrobe.
                    </p>
                    <p className="card-text mb-2" style={{ fontSize: "0.9em" }}>$19.99</p>
                    <Button variant="primary" size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
