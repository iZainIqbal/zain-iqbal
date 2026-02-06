import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Process", "Work", "About", "Contact"];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md py-4 shadow-md"
        : "bg-white/80 backdrop-blur-sm py-6"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          aria-label="Zain Iqbal - Home"
        >
          Zain Iqbal
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => {
            const href = item === "Work" ? "#projects" : `#${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={href}
                className="relative text-gray-700 hover:text-purple-600 transition-colors group font-medium"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => {
              const href = item === "Work" ? "#projects" : `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={href}
                  onClick={handleNavClick}
                  className="px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium"
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
