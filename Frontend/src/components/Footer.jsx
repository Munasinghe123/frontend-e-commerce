import React from "react";
import Logo from "../Images/Header/screen.png";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400">

      {/* Main footer */}
      <div className="w-full px-20 lg:px-16 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9  rounded-2xl flex items-center justify-center">
            <img src={Logo} className="h-16 w-19 object-contain rounded-2xl" />
          </div>
          <span className="font-playfair font-bold text-lg text-white">
            ShopSwift
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-sm">
          <Link to="/shop" className="hover:text-orange-400 transition">Shop</Link>
          <Link to="/sale" className="hover:text-orange-400 transition">Sale</Link>
          <Link to="/about" className="hover:text-orange-400 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
            <Instagram className="w-4 h-4" />
          </a>
          <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
            <Twitter className="w-4 h-4" />
          </a>
          <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
            <Facebook className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © 2026 ShopSwift. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;