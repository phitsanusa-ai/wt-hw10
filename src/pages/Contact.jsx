import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Contact() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center py-12 gap-2">
      <h1 className="text-3xl font-bold text-blue-600">ติดต่อเรา</h1>
      <p className="text-gray-600">อีเมลผู้ใช้: {user.email}</p>
    </div>
  );
}

export default Contact;