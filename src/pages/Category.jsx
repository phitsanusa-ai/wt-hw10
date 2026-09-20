import { useState } from "react";
import CategoryCard from "../components/CategoryCard";

function Category() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newCategory = {
      id,
      name,
      description,
      image: `https://picsum.photos/300/300?random=${id || Date.now()}`,
    };

    setCategories([...categories, newCategory]);
    setId("");
    setName("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center gap-8 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-blue-50 rounded-2xl p-6 flex flex-col gap-4 shadow-md"
      >
        <h2 className="text-center text-lg font-bold text-blue-600">
          บันทึกหมวดสินค้า
        </h2>

        <div>
          <label className="text-sm text-gray-600">รหัสหมวดสินค้า</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">ชื่อหมวดสินค้า</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">คำอธิบายหมวดสินค้า</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg py-2 font-medium"
        >
          บันทึกข้อมูล
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((c, index) => (
          <CategoryCard key={index} name={c.name} image={c.image} />
        ))}
      </div>
    </div>
  );
}

export default Category;