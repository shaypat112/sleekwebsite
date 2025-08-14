import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel images
  const heroImages = [
    "",
    "/hero-2.jpg",
    "/hero-3.jpg"
  ];

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Enhanced Navigation with subtle scroll effect */}
      <nav className={`fixed top-0 w-full p-6 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          SEEK
        </Link>
        
        {/* Desktop Navigation with subtle hover effects */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-sm hover:text-gray-600 transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/shop" className="text-sm hover:text-gray-600 transition-colors relative group">
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/gallery" className="text-sm hover:text-gray-600 transition-colors relative group">
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors relative group">
            Purchase
            <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/cart" className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </Link>
        </div>
        
        {/* Enhanced Mobile Menu Button */}
        <button 
          className="md:hidden text-sm focus:outline-none transition-opacity hover:opacity-70"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Enhanced Mobile Menu Overlay with animation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
            <button 
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="flex flex-col space-y-8 text-center">
              {['Home', 'Shop', 'Gallery', 'Purchase'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-2xl hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
            
            <div className="absolute bottom-8 flex space-x-4">
              <a href="#" className="text-sm hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section with image carousel */}
      <section className="h-screen relative overflow-hidden">
        {/* Hero image carousel */}
        <div className="absolute inset-0 transition-opacity duration-1000">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={image}
                alt={`Fashion ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>
          ))}
        </div>
        
        {/* Hero content with animation */}
        <div className="h-full flex flex-col justify-center items-center px-6 text-center pt-16 relative z-10">
          <div className="max-w-2xl mx-auto transform transition-all duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-fadeIn">
              FUTURE FASHION
            </h1>
            <p className="text-gray-200 mb-8 max-w-md mx-auto animate-fadeIn delay-100 text-xl md:text-2xl font-['Times_New_Roman']">
  Minimalist designs for the modern era.
</p>
            <Link 
              href="/shop" 
              className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-all animate-fadeIn delay-200"
            >
              SHOP NOW
            </Link>
          </div>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-8 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-4' : 'bg-white bg-opacity-50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection with hover effects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-2">FEATURED COLLECTION</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Discover our latest minimalist designs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Link href="/shop" key={item} className="group">
                <div className="aspect-[3/4] bg-gray-50 overflow-hidden relative">
                  <Image
                    src={`/product-${item}.jpeg`}
                    alt={`Product ${item}`}
                    width={600}
                    height={800}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-30 transition-opacity duration-300">
                    <span className="text-white text-sm tracking-widest">VIEW DETAILS</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium text-gray-900">MINIMAL {item === 1 ? 'SHIRT' : item === 2 ? 'SHIRTS' : 'SILVER SURFER SHIRT'}</h3>
                  <p className="text-gray-600 text-sm">${item === 1 ? '20' : item === 2 ? '20' : '35'}.00</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/shop" 
              className="inline-block px-8 py-3 border border-black text-black text-sm tracking-wide hover:bg-black hover:text-white transition-all"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

    

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-light tracking-wide mb-2">STAY CONNECTED</h2>
          <p className="text-gray-500 mb-6">Subscribe for updates and exclusive offers</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:border-black transition-colors"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* Enhanced Footer with social links */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">SEEK</h3>
            <p className="text-gray-400 text-sm">
              Minimalist fashion for the conscious consumer.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">SHOP</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 text-sm hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop" className="text-gray-400 text-sm hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop" className="text-gray-400 text-sm hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>
          
         
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/save?event=example" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://x.com/" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">contact@seekfashion.com</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SEEK. All rights reserved. Designed by Shivang Patel II.
          </p>
        </div>
      </footer>
    </div>
  );
}