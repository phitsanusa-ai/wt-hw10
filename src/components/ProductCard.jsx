function ProductCard({ name, price, image }) {
  return (
    <div className="bg-blue-100 rounded-2xl overflow-hidden shadow-md w-48">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="p-3 text-center">
        <p className="font-semibold text-purple-700">{name}</p>
        <p className="text-purple-700">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;