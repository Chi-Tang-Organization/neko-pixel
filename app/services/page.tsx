import Link from "next/link";

export default function Services() {
    return  (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">NekoPixel</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">Service</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
         
        </div>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600 dark:text-gray-400">
        © 2025 NekoPixel Tech LTD. All rights reserved.
      </footer>
    </div>
    </div>
  );
}