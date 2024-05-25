import React from "react";

const Product = (props) => {
  const Product = props.product;
  return (
    <div>
      <div class="card">
        <img src={Product.image} class="card-img-top" alt="Sản phẩm 2" />
                  <div class="card-body">
                    <h5 class="card-title">{Product.ten}</h5>
                    <p class="card-text">Mô tả sản phẩm 2</p>
                    <p class="card-text">{Product.gia}</p>
                    <a href="#" class="btn btn-primary">
                      Xem thêm
                    </a>
                  </div>
                </div>
    </div>
  );
};

export default Product;
