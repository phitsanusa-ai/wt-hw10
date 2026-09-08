import { FaFacebook, FaLinkedin, FaInstagram, FaFacebookMessenger, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-8 bg-white">
      <div className="flex justify-center gap-6 text-gray-600 font-medium mb-4">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Media</span>
        <span>Gallery</span>
        <span>Contact</span>
      </div>
      <div className="flex justify-center gap-4 text-2xl mb-4">
        <FaFacebook className="text-blue-600" />
        <FaLinkedin className="text-blue-700" />
        <FaInstagram className="text-pink-500" />
        <FaFacebookMessenger className="text-blue-500" />
        <FaTwitter className="text-sky-400" />
      </div>
      <p className="text-gray-500 text-sm">
        © 2026 CT-RMU Shop Company Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;