import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center gap-5 py-10">
      <h2 className="text-2xl font-bold text-blue-600">หน้ารายการสินค้า</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((p, index) => (
          <div
            key={p.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: (index * 100) + "ms" }}
          >
            <ProductCard name={p.title} price={p.price} image={p.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;