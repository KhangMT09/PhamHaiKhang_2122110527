import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layoutStyle.css";
import Logo from "./assets/image/logo.webp";
import product from "./assets/image/183982--product.jpg";
import Slider1 from "./assets/image/slider_1.webp";
import Banner1 from "./assets/image/banner1.webp";
import Banner2 from "./assets/image/banner2.webp";

import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  const hoten = "Pham Hai Khang";
  return (
    <>
      <header className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-md-7">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Navbar
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-2 mt-2">
              <CiUser style={{ fontSize: "20px", marginRight: "15px" }} />
              <CiHeart style={{ fontSize: "20px", marginRight: "15px" }} />
              <FaBell style={{ fontSize: "20px", marginRight: "15px" }} />
              <FaShoppingCart
                style={{ fontSize: "20px", marginRight: "15px" }}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Slider1} class="d-block w-100" alt="slider1" />
            </div>
            <div class="carousel-item">
              <img src={Banner1} class="d-block w-100" alt="Banner1" />
            </div>
            <div class="carousel-item">
              <img src={Banner2} class="d-block w-100" alt="Banner2" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <h1 class="text-center mt-3">New Product</h1>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={product} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="bg-dark text-white py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h5 class="text-uppercase">Menu phụ</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4">
              <h5 class="text-uppercase">Thông tin doanh nghiệp</h5>
              <p class="text-white">Tên công ty: Tên công ty của bạn</p>
              <p class="text-white">Địa chỉ: Địa chỉ công ty của bạn</p>
              <p class="text-white">
                Điện thoại: Số điện thoại công ty của bạn
              </p>
              <p class="text-white">Email: Email công ty của bạn</p>
            </div>

            <div class="col-md-4">
              <h5 class="text-uppercase">Mạng xã hội</h5>
              <ul class="list-unstyled d-flex">
                <li>
                  <a href="#" class="text-white me-2">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white me-2">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white me-2">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
