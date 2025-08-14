import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Minimal Navigation with Hamburger Menu */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          SLEEK
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-sm hover:underline underline-offset-4">Home</Link>
          <Link href="/shop" className="text-sm hover:underline underline-offset-4">Shop</Link>
          <Link href="/gallery" className="text-sm hover:underline underline-offset-4">Gallery</Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">Purchase</Link>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-sm focus:outline-none"
          onClick={toggleMenu}
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
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

      {/* Hero Section - Ultra Clean */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center pt-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            FUTURE FASHION
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Minimalist designs for the modern era.
          </p>
          <Link 
            href="/shop" 
            className="px-6 py-2.5 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-all"
          >
            SHOP NOW
          </Link>
        </div>
      </section>

      {/* Featured Products - Simplified Grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <Link href="/shop" key={item} className="group">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={`/product-${item}.jpg`}
                  alt={`Product ${item}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-medium">PRODUCT {item}</h3>
                <p className="text-gray-600 text-sm">$120.00</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ultra Minimal Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-xs text-gray-500 mb-2">
            THE FUTURE OF MINIMALIST DESIGN
          </p>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SLEEK. Created by Shivang Patel II.
          </p>
        </div>
      </footer>
    </div>
  );
}