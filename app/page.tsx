'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">NekoPixel</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-900 dark:text-gray-100 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">Service</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center perspective-near">
          <h1 
            id="hero-text"
            className="
            text-4xl md:text-5xl font-bold text-transparent
            bg-[length:200%_auto] bg-gradient-to-r hover:bg-[position:100%_0] from-indigo-500 via-purple-500 to-pink-500 bg-clip-text
            inline-block mb-4
            [transition:background-position_600ms,transform_100ms]
            transform-gpu"
            onMouseMove={(e) => {
              const element = e.currentTarget;
              const rect = element.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              const rotateX = (y - centerY) / 2;
              const rotateY = (centerX - x) / 20;
              
              element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            }}
          >
            Innovative Software Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            NekoPixel Tech LTD: Transforming your ideas into powerful, scalable
            software solutions tailored to your unique needs.
          </p>
          <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
            <Link href="mailto:purofle@gmail.com">
            Contact Sales
            </Link>
          </button>
        </div>
      
      {/* Services Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Responsive and dynamic web applications using cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#4285f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600 dark:text-gray-400">
        © 2025 NekoPixel Tech LTD. All rights reserved.
      </footer>
    </div>
    </div>
  );
}
