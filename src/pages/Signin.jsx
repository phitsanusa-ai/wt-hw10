import { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Signin() {
  const { user, setUser } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">เข้าสู่ระบบ</h1>
      <form
        onSubmit={handleSubmit}
        className="w-80 bg-blue-50 rounded-2xl p-6 flex flex-col gap-4 shadow-md"
      >
        <div>
          <label className="text-sm text-gray-600">อีเมล</label>
          <input
            ref={emailRef}
            type="email"
            defaultValue={user.email}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">รหัสผ่าน</label>
          <input
            ref={passwordRef}
            type="password"
            defaultValue={user.password}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg py-2 font-medium"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}

export default Signin;