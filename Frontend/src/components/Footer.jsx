import React from "react";
import Logo from "../Images/screen.png";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const links = {
  Shop: ["New Arrivals", "Women", "Men", "Footwear", "Accessories", "Sale"],
  Help: ["FAQ", "Shipping Info", "Returns", "Track Order", "Contact Us"],
  Company: ["About Us", "Careers", "Press", "Privacy Policy", "Terms of Service"],
};

const socials = [
  { icon: <Instagram className="w-4 h-4" />, href: "#" },
  { icon: <Twitter className="w-4 h-4" />, href: "#" },
  { icon: <Facebook className="w-4 h-4" />, href: "#" },
  { icon: <Youtube className="w-4 h-4" />, href: "#" },
];

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400">

      {/* Main footer */}
      <div className="px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Brand col */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center">
                <img src={Logo} className="h-6 w-6 object-contain" />
              </div>
              <span className="font-playfair font-bold text-lg text-white">
                ShopSwift
              </span>
            </div>
          </Link>

          <p className="text-sm leading-relaxed max-w-xs text-gray-500">
            Discover the latest trends in lifestyle and fashion with
            lightning-fast delivery that keeps up with your life.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {heading}
            </h4>
            <ul className="space-y-3">
              {items.map(item => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-gray-500 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 lg:px-12 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © 2026 ShopSwift. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-3">
          {["VISA", "MC", "AMEX", "PayPal"].map(p => (
            <span
              key={p}
              className="text-[10px] font-bold px-3 py-1.5 rounded-md bg-white/10 text-gray-400"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}

export default Footer;