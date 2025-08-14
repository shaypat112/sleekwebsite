import { useState } from 'react';
import Link from 'next/link';

export default function Purchase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Purchase submitted:', formData);
  };

  // Payment method handlers
  const handlePayPal = () => {
    window.location.href = 'https://www.paypal.com/checkoutnow';
  };

  const handleCashApp = () => {
    window.location.href = 'https://cash.app/payments';
  };

  const handleApplePay = () => {
    window.location.href = 'https://applepay.apple.com/';
  };

  const handleVenmo = () => {
    window.location.href = 'https://venmo.com/';
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Enhanced Navigation with Modern Hamburger Menu */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          SEEK
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-sm hover:underline underline-offset-4">Home</Link>
          <Link href="/shop" className="text-sm hover:underline underline-offset-4">Shop</Link>
          <Link href="/gallery" className="text-sm hover:underline underline-offset-4">Gallery</Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4 font-medium">Purchase</Link>
        </div>
        
        {/* Modern Hamburger Button */}
        <button 
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-black my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
        </button>

        {/* Modern Mobile Menu - Centered with Overlay */}
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="fixed inset-0 flex items-center justify-center z-50 md:hidden pointer-events-none">
              <div className="bg-white p-8 rounded-lg max-w-xs w-full pointer-events-auto animate-fade-in-up">
                <div className="flex flex-col space-y-6 text-center">
                  <Link 
                    href="/" 
                    className="text-lg hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/shop" 
                    className="text-lg hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="text-lg hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link 
                    href="/" 
                    className="text-lg font-medium hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Purchase Section */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center">COMPLETE YOUR PURCHASE</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-bold mb-6 border-b border-black pb-2">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          
          {/* Payment Information */}
          <div>
            <h2 className="text-xl font-bold mb-6 border-b border-black pb-2">Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full border-b border-black py-2 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4">ORDER SUMMARY</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-bold mt-4 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 mt-6 hover:bg-gray-800 transition-colors"
                onClick={handleSubmit}
              >
                COMPLETE PURCHASE
              </button>
            </div>
          </div>
        </div>

        {/* Alternative Payment Methods Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold mb-6 text-center">OR PAY WITH</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <button 
              onClick={handlePayPal}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="/paypal-logo.png" alt="PayPal" className="h-10 w-auto mb-2" />
              <span className="text-sm">PayPal</span>
            </button>
            
            <button 
              onClick={handleCashApp}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="/cashapp-logo.png" alt="Cash App" className="h-10 w-auto mb-2" />
              <span className="text-sm">Cash App</span>
            </button>
            
            <button 
              onClick={handleApplePay}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="/applepay-logo.png" alt="Apple Pay" className="h-10 w-auto mb-2" />
              <span className="text-sm">Apple Pay</span>
            </button>
            
            <button 
              onClick={handleVenmo}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="/venmo-logo.png" alt="Venmo" className="h-10 w-auto mb-2" />
              <span className="text-sm">Venmo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SEEK</h3>
            <p className="text-gray-600">Futuristic fashion for modern living.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-600 hover:underline transition-colors">All Products</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:underline transition-colors">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:underline transition-colors">Purchase</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:underline transition-colors">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 9a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-1z"></path>
                  <path d="M17 5h-1a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SEEK. All rights reserved. Shivang Patel II</p>
        </div>
      </footer>
    </div>
  );
}