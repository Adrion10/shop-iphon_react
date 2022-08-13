import phones from "../data";
import "./HomePage.css";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <div className="products__wrapper">
      {phones.map((phone) => (
        <ProductCard key={phone._id} phone={phone} />
      ))}
    </div>
  );
};

export default HomePage;
