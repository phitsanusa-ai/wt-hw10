import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center gap-4 py-12 bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-600">Home</h1>
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-md"
      />
      <Link to="/order" className="text-purple-600 underline font-medium">
        ไปหน้าสั่งซื้อ
      </Link>
      <Link
        to="/product"
        className="px-5 py-2 bg-blue-500 text-white rounded-full font-medium"
      >
        ไปหน้าตะกร้าสินค้า
      </Link>
    </div>
  );
}

export default Home;