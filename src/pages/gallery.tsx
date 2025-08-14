import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const images = [
  { id: 1, src: 'https://th.bing.com/th/id/OIP.kkl38K4iesyI5R-fDWIBVwHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3', alt: 'Minimalist design 1', category: 'furniture' },
  { id: 2, src: '/gallery2.jpg', alt: 'Minimalist design 2', category: 'lighting' },
  { id: 3, src: '/gallery3.jpg', alt: 'Minimalist design 3', category: 'accessories' },
  { id: 4, src: '/gallery4.jpg', alt: 'Minimalist design 4', category: 'furniture' },
  { id: 5, src: '/gallery5.jpg', alt: 'Minimalist design 5', category: 'lighting' },
  { id: 6, src: '/gallery6.jpg', alt: 'Minimalist design 6', category: 'accessories' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>SLEEK | Gallery</title>
      </Head>

      {/* Enhanced Navigation with Mobile Menu */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white border-b border-black">
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
          SLEEK
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm hover:underline">Home</Link>
          <Link href="/shop" className="text-sm hover:underline">Shop</Link>
          <Link href="/gallery" className="text-sm font-medium underline">Gallery</Link>
          <Link href="/contact" className="text-sm font-medium underline">Purchase</Link>
        </div>
        
        {/* Mobile Menu Button */}
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

        {/* Mobile Menu Overlay */}
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
                    className="text-lg font-medium hover:text-gray-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                     </Link>
                  <Link 
                    href="/contact" 
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

      {/* Gallery Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">GALLERY</h1>
        
        {/* Category Filters - Improved Mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-b ${selectedCategory === 'all' ? 'border-black font-medium' : 'border-transparent'}`}
          >
            ALL
          </button>
          <button 
            onClick={() => setSelectedCategory('furniture')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-b ${selectedCategory === 'furniture' ? 'border-black font-medium' : 'border-transparent'}`}
          >
            BEST WORKS
          </button>
          <button 
            onClick={() => setSelectedCategory('lighting')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-b ${selectedCategory === 'lighting' ? 'border-black font-medium' : 'border-transparent'}`}
          >
            WEARABLES
          </button>
          <button 
            onClick={() => setSelectedCategory('accessories')}
            className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border-b ${selectedCategory === 'accessories' ? 'border-black font-medium' : 'border-transparent'}`}
          >
            ACCESSORIES
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">{image.alt.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Image Modal - Improved Mobile */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 sm:-top-10 right-0 text-white text-xs sm:text-sm hover:underline"
            >
              CLOSE
            </button>
            <img
              src={images.find(img => img.id === selectedImage)?.src || ''}
              alt={images.find(img => img.id === selectedImage)?.alt || ''}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-2 sm:mt-4 text-xs sm:text-sm">
              {images.find(img => img.id === selectedImage)?.alt.toUpperCase()}
            </p>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="py-8 px-6 border-t border-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} SLEEK. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}