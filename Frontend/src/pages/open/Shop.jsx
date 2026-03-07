import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

//women
import blazer from '../../Images/Shop/Women/blazer.jpg'
import frock from '../../Images/Shop/Women/frock.jpg'
import highrise from '../../Images/Shop/Women/highrise.jpg'
import oversized from '../../Images/Shop/Women/oversized.jpg'
import ribbed from '../../Images/Shop/Women/ribbed.jpg'
import skirt from '../../Images/Shop/Women/skirt.jpg'

//men
import buttonShirt from '../../Images/Shop/Men/button-shirt.jpg';
import crewShirt from '../../Images/Shop/Men/crew-shirt.jpg';
import jacket from '../../Images/Shop/Men/jacket.jpg';
import joggers from '../../Images/Shop/Men/joggers.jpg';
import slim from '../../Images/Shop/Men/slim.jpg';
import leanshirt from '../../Images/Shop/Men/leanshirt.jpg';

//footware
import boots from '../../Images/Shop/Footwear/boots.jpg'
import loofers from '../../Images/Shop/Footwear/loofers.jpg'
import nike from '../../Images/Shop/Footwear/nike.jpg'
import sneakers from '../../Images/Shop/Footwear/sneakers.jpg'

//accesories
import belt from '../../Images/Shop/Acessories/belt.jpg'
import gucci from '../../Images/Shop/Acessories/gucci.jpg'
import scarf from '../../Images/Shop/Acessories/scarf.jpg'
import watch from '../../Images/Shop/Acessories/watch.jpg'

//streetwear
import pants from '../../Images/Shop/streetwear/cargopants.jpg'
import hat from '../../Images/Shop/streetwear/hat.jpg'
import pufferjacket from '../../Images/Shop/streetwear/pufferjacket.jpg'
import tshirt from '../../Images/Shop/streetwear/tshirt.jpg'


const ALL_PRODUCTS = [
  // Women
  { id: 1,  category: "women",      name: "Floral Wrap Dress",      price: 89,  badge: "New",  sizes: ["XS","S","M","L"], image: blazer },
  { id: 2,  category: "women",      name: "Linen Blazer",           price: 120, badge: null,   sizes: ["S","M","L","XL"], image: frock },
  { id: 3,  category: "women",      name: "High-Rise Wide Leg",     price: 74,  badge: "Sale", sizes: ["XS","S","M","L","XL"], image: highrise},
  { id: 4,  category: "women",      name: "Ribbed Knit Top",        price: 45,  badge: null,   sizes: ["XS","S","M","L"], image: oversized },
  { id: 5,  category: "women",      name: "Satin Slip Skirt",       price: 65,  badge: "New",  sizes: ["XS","S","M","L"], image:ribbed },
  { id: 6,  category: "women",      name: "Oversized Trench",       price: 195, badge: null,   sizes: ["S","M","L","XL"], image: skirt },

  // Men
  { id: 7,  category: "men",        name: "Slim Chino Pants",       price: 79,  badge: null,   sizes: ["S","M","L","XL","XXL"], image: slim },
  { id: 8,  category: "men",        name: "Oxford Button Shirt",    price: 65,  badge: "New",  sizes: ["S","M","L","XL"], image: buttonShirt },
  { id: 9,  category: "men",        name: "Merino Crew Sweater",    price: 110, badge: null,   sizes: ["S","M","L","XL"], image: crewShirt },
  { id: 10, category: "men",        name: "Relaxed Linen Shirt",    price: 58,  badge: "Sale", sizes: ["S","M","L","XL","XXL"], image: leanshirt },
  { id: 11, category: "men",        name: "Tapered Joggers",        price: 69,  badge: null,   sizes: ["S","M","L","XL"], image: joggers },
  { id: 12, category: "men",        name: "Classic Denim Jacket",   price: 135, badge: null,   sizes: ["S","M","L","XL"], image: jacket },

  // Footwear
  { id: 13, category: "footwear",   name: "Leather Derby Shoes",    price: 155, badge: null,   sizes: ["40","41","42","43","44"], image:boots },
  { id: 14, category: "footwear",   name: "Canvas Sneakers",        price: 75,  badge: "New",  sizes: ["39","40","41","42","43","44"], image: loofers },
  { id: 15, category: "footwear",   name: "Suede Chelsea Boots",    price: 185, badge: null,   sizes: ["40","41","42","43","44"], image: nike },
  { id: 16, category: "footwear",   name: "Slip-On Loafers",        price: 98,  badge: "Sale", sizes: ["39","40","41","42","43"], image: sneakers },

  // Accessories
  { id: 17, category: "accessories",name: "Leather Tote Bag",       price: 120, badge: null,   sizes: ["One Size"], image: gucci },
  { id: 18, category: "accessories",name: "Silk Scarf",             price: 55,  badge: "New",  sizes: ["One Size"], image: scarf },
  { id: 19, category: "accessories",name: "Minimalist Watch",       price: 210, badge: null,   sizes: ["One Size"], image: watch},
  { id: 20, category: "accessories",name: "Leather Belt",           price: 48,  badge: null,   sizes: ["S","M","L"], image: belt},

  // Streetwear
  { id: 21, category: "streetwear", name: "Graphic Oversized Tee",  price: 45,  badge: "New",  sizes: ["S","M","L","XL","XXL"], image:tshirt  },
  { id: 22, category: "streetwear", name: "Cargo Pants",            price: 88,  badge: null,   sizes: ["S","M","L","XL"], image:pants },
  { id: 23, category: "streetwear", name: "Puffer Jacket",          price: 165, badge: "Sale", sizes: ["S","M","L","XL"], image: pufferjacket },
  { id: 24, category: "streetwear", name: "Bucket Hat",             price: 35,  badge: null,   sizes: ["S/M","L/XL"], image:hat },
];

const CATEGORIES = ["all", "women", "men", "footwear", "accessories", "streetwear"];
const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low", "Newest"];

// Product Card
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const size = selectedSize || product.sizes[0];
    addToCart({ ...product, size });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.13)] transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden h-[280px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full
            ${product.badge === "Sale" ? "bg-[#E8420A] text-white" : "bg-black text-white"}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
        <p className="text-[#E8420A] font-bold text-sm mb-3">${product.price}</p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`text-[10px] px-2 py-1 rounded-md border transition-all
                ${selectedSize === size
                  ? "bg-black text-white border-black"
                  : "border-gray-200 text-gray-500 hover:border-black hover:text-black"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          className={`w-full py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300
            ${added
              ? "bg-green-500 text-white"
              : "bg-black text-white hover:bg-[#E8420A]"
            }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

// Cart Drawer 
function CartDrawer({ open, onClose }) {
  const { cartItems, removeFromCart, updateQty, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#F5F0EB] z-50 shadow-2xl
        flex flex-col transition-transform duration-400 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <h2 className="font-serif font-bold text-xl">
            Cart <span className="text-[#E8420A]">({totalItems})</span>
          </h2>
          <button onClick={onClose} className="p-1 hover:text-[#E8420A] transition">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <ShoppingBag size={40} strokeWidth={1} />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`}
                className="flex gap-3 bg-white rounded-2xl p-3 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400 mb-2">Size: {item.size}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                        className="w-6 h-6 rounded-full bg-gray-100 text-xs font-bold hover:bg-black hover:text-white transition"
                      >−</button>
                      <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                        className="w-6 h-6 rounded-full bg-gray-100 text-xs font-bold hover:bg-black hover:text-white transition"
                      >+</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#E8420A]">${item.price * item.qty}</span>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-gray-300 hover:text-red-500 transition"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-5 border-t border-black/10">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-500">Total</span>
              <span className="font-bold text-lg">${totalPrice}</span>
            </div>
            <button className="w-full py-3 bg-[#E8420A] text-white rounded-xl font-semibold
              hover:bg-[#c93800] transition-all hover:scale-[1.02] shadow-lg shadow-orange-500/20">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

//  Shop Page 
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [sort, setSort] = useState("Default");
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  // Sync URL param → active category
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter + sort
  const filtered = ALL_PRODUCTS
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => {
      if (sort === "Price: Low to High") return a.price - b.price;
      if (sort === "Price: High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F5F0EB] pt-10 lg:pt-24 px-6 lg:px-14 pb-20">

      {/* Page Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#E8420A] font-medium mb-2">
            Our Collection
          </p>
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900">
            Shop
          </h1>
        </div>

        {/* Cart button */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 px-5 py-2.5 bg-black text-white
            rounded-full text-xs font-semibold uppercase tracking-wider
            hover:bg-[#E8420A] transition-all"
        >
          <ShoppingBag size={15} />
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#E8420A] text-white
              rounded-full text-[10px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all
                ${activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-500 hover:border-black border border-gray-200 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-gray-400" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs bg-white border border-gray-200 rounded-full px-3 py-2
              focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-gray-400 mb-6">{filtered.length} products</p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}