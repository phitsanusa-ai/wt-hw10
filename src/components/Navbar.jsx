import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl">🍎</div>
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">หน้าหลัก</Link>
        <Link to="/category">หมวดสินค้า</Link>
        <Link to="/product">สินค้า</Link>
        <Link to="/order">สั่งซื้อ</Link>
        <Link to="/contact">ติดต่อเรา</Link>
        <Link to="/about">เกี่ยวกับเรา</Link>
      </div>
      <div className="flex items-center gap-4">
        <FaShoppingCart className="text-xl text-gray-700" />
        <Link to="/signup" className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full">
          สมัครสมาชิก
        </Link>
        <Link to="/signin" className="px-4 py-2 bg-blue-500 text-white rounded-full">
          เข้าสู่ระบบ
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;