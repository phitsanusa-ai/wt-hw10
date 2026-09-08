import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Xiaomi 16S", price: 9000, image: "https://picsum.photos/300/200?random=11" },
  { id: 2, name: "iPhone 17 Pro", price: 45000, image: "https://picsum.photos/300/200?random=12" },
  { id: 3, name: "Samsung S26", price: 50000, image: "https://picsum.photos/300/200?random=13" },
  { id: 4, name: "Vivo Y50", price: 15000, image: "https://picsum.photos/300/200?random=14" },
  { id: 5, name: "Oppo V60", price: 17000, image: "https://picsum.photos/300/200?random=15" },
];

function Product() {
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
            <ProductCard name={p.name} price={p.price} image={p.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;