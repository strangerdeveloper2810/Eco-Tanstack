import { type FC, type JSX, useEffect, useState, Suspense } from "react";
import { LayoutLoading } from "@/components";
import { Toaster } from "@/components/ui/sonner";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayoutComponent: FC<AuthLayoutProps> = ({
  children,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">M</span>
          </div>
          <div className="text-xl font-semibold text-gray-900 mb-2">
            MovieBooking
          </div>
          <div className="text-gray-600">Đang tải...</div>
          <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md z-50 transition-all duration-300"
      >
        Chuyển đến nội dung chính
      </a>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 flex-col justify-center items-center px-12">
          <div className="max-w-md text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-3xl">M</span>
              </div>
            </div>

            {/* Brand Text */}
            <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Chào mừng đến với
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                MovieBooking
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trải nghiệm điện ảnh tuyệt vời với hệ thống đặt vé phim trực tuyến
              hàng đầu Việt Nam
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Đặt vé nhanh chóng và tiện lợi
                </span>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Thanh toán an toàn và bảo mật
                </span>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Hỗ trợ khách hàng 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col justify-center px-6 sm:px-8 lg:px-12">
          <div className="max-w-md mx-auto w-full">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
            </div>

            {/* Auth Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
              <Suspense fallback={<LayoutLoading />}>{children}</Suspense>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Bằng cách tiếp tục, bạn đồng ý với{" "}
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Điều khoản sử dụng
                </a>{" "}
                và{" "}
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Chính sách bảo mật
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <Toaster />
    </div>
  );
};

export default AuthLayoutComponent;
