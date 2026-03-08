import React from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, X, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import CartImage from '../../Images/Cart/cartImage.jpg';


function Cart() {
    const { cartItems, removeFromCart, updateQty, totalPrice, totalItems } = useCart();

    return (
        <div className="min-h-screen bg-[#F5F0EB] flex">

            {/* ── Left col — all cart content ── */}
            <div className="flex-1 pt-10 pb-20 px-6 lg:px-14 overflow-y-auto">

                {/* Header */}
                <div className="mb-10">
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-black transition mb-4 uppercase tracking-wider"
                    >
                        <ArrowLeft size={13} /> Continue Shopping
                    </Link>
                    <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900">
                        Your <span className="italic text-[#E8420A]">Cart</span>
                    </h1>
                    <p className="text-sm font-light italic text-gray-800 mt-2">
                        {totalItems === 0
                            ? "No items yet"
                            : `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`}
                    </p>
                </div>

                {/* Empty State */}
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-gray-400 gap-4">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                            <ShoppingBag size={32} strokeWidth={1.2} />
                        </div>
                        <p className="text-base font-medium text-gray-500">Your cart is empty</p>
                        <p className="text-sm text-gray-400">Looks like you haven't added anything yet.</p>
                        <Link
                            to="/shop"
                            className="mt-4 px-6 py-2.5 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#E8420A] transition-all"
                        >
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl p-5  shadow-[0_15px_40px_rgba(0,0,0,0.08)]">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 rounded-2xl overflow-hidden ">
                            {cartItems.map((item, index) => (
                                <div
                                    key={`${item.id}-${item.size}`}
                                    className={`flex gap-4 p-4 ${index !== cartItems.length - 1 ? "border-b border-gray-300" : ""}`}
                                >
                                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                                            <p className="font-bold text-gray-900 text-sm flex-shrink-0">${item.price * item.qty}</p>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-0.5 capitalize">
                                            {item.category} · Size: {item.size}
                                        </p>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
                                                <button
                                                    onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                                                    className="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-black transition font-bold text-sm"
                                                >−</button>
                                                <span className="text-xs font-semibold w-4 text-center">{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                                                    className="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-black transition font-bold text-sm"
                                                >+</button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className="text-xs text-red-400 hover:text-red-500 transition flex items-center gap-1"
                                            >
                                                <X size={12} /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1 border-l border-gray-300 pl-5">
                            <div className=" p-6 sticky top-10">
                                <h2 className="font-serif font-bold text-xl text-gray-900 mb-6">Order Summary</h2>
                                <div className="space-y-3 mb-6">
                                    {cartItems.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                                            <span className="text-gray-500 truncate max-w-[160px]">
                                                {item.name} <span className="text-gray-300">×{item.qty}</span>
                                            </span>
                                            <span className="font-medium text-gray-800">${item.price * item.qty}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-100 pt-4 mb-6 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Subtotal</span>
                                        <span className="font-medium">${totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Shipping</span>
                                        <span className="font-medium text-green-500">Free</span>
                                    </div>
                                    <div className="flex justify-between text-base font-bold pt-3 border-t border-gray-100">
                                        <span>Total</span>
                                        <span className="text-[#E8420A] text-lg">${totalPrice}</span>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-[#E8420A] text-white rounded-xl font-semibold
                                    hover:bg-[#c93800] transition-all hover:scale-[1.02]
                                    shadow-lg shadow-orange-500/20 text-sm uppercase tracking-wider">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {/* ── Right col── */}
            <div className="hidden lg:block w-[380px] xl:w-[460px] flex-shrink-0 sticky top-0 h-screen pt-10  pr-2 pb-2">
                <div className='relative w-full h-full rounded-2xl overflow-hidden'>
                    <img
                        src={CartImage}
                        alt="fashion lifestyle"
                        className="w-full h-full object-cover  "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                        <div className="text-white">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">Style awaits</p>
                            <p className="font-serif font-bold text-3xl leading-tight">
                                Dress for the<br />life you want.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Cart;