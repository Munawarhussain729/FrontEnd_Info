import React from "react";
import DummyProducts from "./Products";

import { Navigation, Pagination } from "swiper";
import "./Style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";
import { Link } from "react-router-dom";

const CartReduxPage = () => {
  const { totalQuantity } = useSelector((state) => state.Cart);
  const { cartItems } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <div className="product_page">
        <div>
          <Link to="/">
            <Button className="RemoveFromCartBtn">Back to Home</Button>
          </Link>
        </div>
        <h1>Products</h1>

        <hr
          style={{
            height: "4px",
            background: "black",
            margin: "15px 50px",
            width: "95%",
          }}
        />
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="product_swiper"
        >
          {DummyProducts.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="ProductSlide">
                  <h3> Name: {item.name}</h3>
                  <h3> Price: {item.price}</h3>
                  <Button
                    className="AddToCartBtn"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to Cart
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <h1>Cart Section {totalQuantity}</h1>
      <hr style={{ height: "4px", background: "black", margin: "15px 50px" }} />
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {cartItems.map((item, index) => {
          return (
            <Card className="m-2 cartItemCard" key={index}>
              <div className="text-center">
                <h3> Name: {item.name}</h3>
                <h3> Price: {item.price}</h3>
              </div>
              <div className="quantityBubble rounded-circle">
                {item.quantity}
              </div>
              <Button
                className="RemoveFromCartBtn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove From Cart
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CartReduxPage;
