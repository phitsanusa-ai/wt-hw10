function CategoryCard({ name, image }) {
  return (
    <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <span className="absolute bottom-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
        {name}
      </span>
    </div>
  );
}

export default CategoryCard;