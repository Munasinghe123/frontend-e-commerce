import React, { useEffect, useState, useRef } from "react";
import Logo from "../Images/Header/screen.png";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

function Header() {

    const { cartItems, removeFromCart, updateQty, totalPrice, totalItems } = useCart();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);
    const overlayRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isSidebarOpen) {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power3.out" });
            gsap.fromTo(sidebarRef.current, { x: "100%" }, { x: 0, duration: 0.6, ease: "power3.out" });
        } else if (sidebarRef.current) {
            gsap.to(sidebarRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
        }
    }, [isSidebarOpen]);

    const closeSidebar = () => {
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power3.in" });
        gsap.to(sidebarRef.current, {
            x: "100%", duration: 0.4, ease: "power3.in",
            onComplete: () => setIsSidebarOpen(false),
        });
    };

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:7000/api/logout", {}, { withCredentials: true });
            setIsAuthenticated(false);
            navigate("/");
            toast.success("Logged out!");
        } catch (err) {
            toast.error("Logout failed");
        }
    };

    return (
        <div className="w-full flex justify-center pt-6">

            {/* Desktop */}
            <div className="hidden xl:flex items-center justify-between px-10 py-3 
                        w-[92%] max-w-[1400px] 
                        bg-white/80 backdrop-blur-md
                        border border-[#ece8e1]
                        rounded-4xl
                        shadow-[0_15px_40px_rgba(0,0,0,0.08)]">


                <Link to="/">
                    <div className="flex items-center gap-2">
                        <img src={Logo} className="h-16 w-16 rounded-2xl object-contain" />
                        <span className="font-playfair font-bold text-lg text-gray-900">
                            ShopSwift
                        </span>
                    </div>
                </Link>


                <div className="flex items-center gap-10 text-sm font-medium text-gray-600">
                    <Link to="/" className="text-gray-700 font-semibold hover:text-orange-600 transition duration-200">Home</Link>
                    <Link to="/shop" className="text-gray-700 font-semibold hover:text-orange-600 transition duration-200">Shop</Link>
                    <Link to="/sale" className="text-gray-700 font-semibold hover:text-orange-600 transition duration-200">Sale</Link>
                    <Link to="/new-arrivals" className="text-gray-700 font-semibold hover:text-orange-600 transition duration-200">New Arrivals</Link>
                </div>


                <div className="flex items-center gap-4">

                    {/* Search bar */}
                    <div className="flex items-center gap-2 bg-white border border-[#ece8e1] rounded-full px-4 py-2 w-52 shadow-sm">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="text-sm text-gray-600 bg-transparent outline-none w-full placeholder-gray-400"
                        />
                    </div>

                    {/* Cart */}
                    <Link to="/cart">
                        <button className="relative p-2.5 rounded-full hover:bg-white transition-all border border-transparent hover:border-[#ece8e1]">
                            <ShoppingCart className="text-gray-700 w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                                {totalItems}
                            </span>
                        </button>
                    </Link>

                    {/* Sign in */}
                    <Link to="/Login">
                        <button className="flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                            <User className="w-4 h-4" />
                            Sign in
                        </button>
                    </Link>

                </div>
            </div>

            {/*  Mobile  */}
            <nav className="xl:hidden w-full flex justify-between items-center px-5 py-4">
                <Link to="/">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center">
                            <img src={Logo} className="h-5 w-5 object-contain" />
                        </div>
                        <span className="font-playfair font-bold text-gray-900">ShopSwift</span>
                    </div>
                </Link>
                <button onClick={() => setIsSidebarOpen(true)}>
                    <Menu className="h-7 w-7 text-gray-700" />
                </button>

                {/* Overlay */}
                <div
                    ref={overlayRef}
                    className={`fixed inset-0 bg-black/60 z-40 ${isSidebarOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                    style={{ opacity: 0 }}
                    onClick={closeSidebar}
                />

                {/* Sidebar */}
                <div
                    ref={sidebarRef}
                    className="fixed right-0 top-0 h-screen bg-[#faf8f5] border-l border-[#ece8e1] z-50 w-2/3 flex justify-end"
                    style={{ transform: "translateX(100%)" }}
                >
                    <div className="m-10 flex flex-col text-xl space-y-6 items-end">
                        <button onClick={closeSidebar}>
                            <X className="h-7 w-7 text-gray-700" />
                        </button>
                        <Link to="/" onClick={closeSidebar} className="text-gray-700 hover:text-gray-900 transition">Home</Link>
                        <Link to="/shop" onClick={closeSidebar} className="text-gray-700 hover:text-gray-900 transition">Shop</Link>
                        <Link to="/sale" onClick={closeSidebar} className="text-gray-700 font-semibold">Sale</Link>
                        <Link to="/new-arrivals" onClick={closeSidebar} className="text-gray-700 hover:text-gray-900 transition">New Arrivals</Link>
                        {!isAuthenticated && (
                            <Link to="/Login">
                                <button className="px-7 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">
                                    Sign in
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;