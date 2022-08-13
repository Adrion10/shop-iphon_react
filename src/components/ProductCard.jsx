import { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ phone }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={phone.image} alt="" />
        <h4>{phone.name}</h4>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${phone.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating value={phone.rating} text={`${phone.numReviews} reviews`} />
        </div>
        <button
          className="ProductCard__button"
          onClick={() => addToCart(phone)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
