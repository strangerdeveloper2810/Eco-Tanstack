import { type FC, type JSX, useState } from "react";
import { Search, Menu, X, User, ShoppingCart, Star } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { navigationHeaderItems } from "@/constants/navigationItem";

const HeaderComponent: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Function to check if a route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  // Function to render navigation items
  const renderNavigationItems = (isMobile = false) =>
    navigationHeaderItems.map((item) => {
      const isActive = isActiveRoute(item.href);
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`${
            isMobile ? "block py-3 px-4 text-base" : "py-2 px-3 text-sm"
          } font-medium transition-all duration-300 rounded-md ${
            isActive
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
              : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          }`}
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
        >
          {item.name}
        </Link>
      );
    });

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in-down">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 fill-current" />
                <span className="hidden sm:inline">Hotline: </span>1900 1234
              </span>
              <span className="hidden sm:inline">
                Email: support@moviebooking.com
              </span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link
                to="/auth/login"
                className="hover:text-yellow-300 transition-colors duration-300 text-xs sm:text-sm"
              >
                Đăng nhập
              </Link>
              <Link
                to="/auth/register"
                className="hover:text-yellow-300 transition-colors duration-300 text-xs sm:text-sm"
              >
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-sm md:text-xl">M</span>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                <Link
                  to="/"
                  className="hover:text-purple-600 transition-colors duration-300"
                >
                  MovieBooking
                </Link>
              </h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                Đặt vé phim trực tuyến
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm phim, rạp chiếu..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Tìm
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Cart */}
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  3
                </span>
              </button>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300">
                <User className="w-6 h-6" />
                <span className="hidden sm:block">Tài khoản</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4 animate-slide-down">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm phim, rạp chiếu..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Tìm
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex space-x-8 py-3">
            {renderNavigationItems()}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-slide-down">
              <div className="space-y-2">{renderNavigationItems(true)}</div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
