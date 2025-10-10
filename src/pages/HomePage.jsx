// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductionVideo from "../components/ProductionVideo";
import FeaturedProducts from "../components/FeaturedProducts";
import CustomerReviews from "../components/CustomerReviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ProductionVideo />
      <FeaturedProducts />
      <CustomerReviews />
    </>
  );
}
