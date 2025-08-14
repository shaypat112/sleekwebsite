import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "NEO T-SHIRT",
    price: 85,
    category: "T-Shirts",
    image: "/products/neo-tshirt.jpg"
  },
  {
    id: 2,
    name: "FUTURE PANTS",
    price: 120,
    category: "Pants",
    image: "/products/future-pants.jpg"
  },
  {
    id: 3,
    name: "VOYAGE HOODIE",
    price: 145,
    category: "Hoodies",
    image: "/products/voyage-hoodie.jpg"
  },
  {
    id: 4,
    name: "ZERO CAP",
    price: 55,
    category: "Accessories",
    image: "/products/zero-cap.jpg"
  },
  {
    id: 5,
    name: "EDGE JACKET",
    price: 195,
    category: "Outerwear",
    image: "/products/edge-jacket.jpg"
  },
  {
    id: 6,
    name: "PURE T-SHIRT",
    price: 85,
    category: "T-Shirts",
    image: "/products/pure-tshirt.jpg"
  },
];

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          SLEEK
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-sm hover:underline underline-offset-4">Home</Link>
          <Link href="/shop" className="text-sm hover:underline underline-offset-4 font-medium">Shop</Link>
          <Link href="/gallery" className="text-sm hover:underline underline-offset-4">Gallery</Link>
          <Link href="/contact.tsx" className="text-sm hover:underline underline-offset-4">Purchase</Link>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay - Now centered vertically */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center md:hidden">
            <div className="flex flex-col space-y-8 text-center">
              <Link 
                href="/" 
                className="text-xl hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="text-xl hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/gallery" 
                className="text-xl hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="text-xl hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Purchase
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Shop Header */}
      <header className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">SHOP</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Minimalist designs with premium quality. Each piece is crafted for longevity and style.
        </p>
      </header>

      {/* Product Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-sm">
            <span className="mr-4 cursor-pointer font-medium">All</span>
            <span className="mr-4 cursor-pointer hover:underline">T-Shirts</span>
            <span className="mr-4 cursor-pointer hover:underline">Pants</span>
            <span className="mr-4 cursor-pointer hover:underline">Hoodies</span>
            <span className="cursor-pointer hover:underline">Accessories</span>
          </div>
          <div className="text-sm">
            <select className="bg-transparent border-b border-black py-1 focus:outline-none">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square bg-gray-100 mb-4 overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-black text-white px-6 py-2 text-sm tracking-wider">
                      QUICK VIEW
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.category}</p>
                  </div>
                  <p className="font-medium">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center border border-black font-medium">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black">3</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-black">→</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SEEK</h3>
            <p className="text-gray-600">Futuristic fashion for modern living.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-600 hover:underline">All Products</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:underline">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:underline">Contact</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:underline">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black">IG</Link>
              <Link href="#" className="text-gray-600 hover:text-black">TW</Link>
              <Link href="#" className="text-gray-600 hover:text-black">FB</Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SEEK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}