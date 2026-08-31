import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "iPhone 17 Pro", price: 50000, image: "https://placehold.co/300x200?text=iPhone+17+Pro" },
  { id: 2, name: "iPhone 17 Pro", price: 50000, image: "https://placehold.co/300x200?text=iPhone+17+Pro" },
  { id: 3, name: "Samsung S25", price: 40000, image: "https://placehold.co/300x200?text=Samsung+S25" },
  { id: 4, name: "Oppo V20", price: 9000, image: "https://placehold.co/300x200?text=Oppo+V20" },
  { id: 5, name: "Xiaomi S20", price: 4500, image: "https://placehold.co/300x200?text=Xiaomi+S20" },
];

function Product() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2xl font-bold text-blue-600">หน้ารายการสินค้า</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
}

export default Product;