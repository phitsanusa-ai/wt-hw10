import { FaFacebookMessenger, FaYoutube, FaLine, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h2 className="text-2xl font-bold text-blue-600">
        หน้าเกี่ยวกับ เทคโนโลยีคอมพิวเตอร์
      </h2>
      <div className="flex gap-6 text-3xl">
        <FaFacebookMessenger className="text-blue-500" />
        <FaYoutube className="text-red-600" />
        <FaLine className="text-green-500" />
        <FaInstagram className="text-pink-500" />
        <FaLinkedin className="text-blue-700" />
      </div>
    </div>
  );
}

export default About;