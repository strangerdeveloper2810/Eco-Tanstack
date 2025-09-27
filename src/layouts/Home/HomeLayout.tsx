import { type FC, type JSX, useEffect, useState, Suspense } from "react";
import { Header, Footer, Contents, LayoutLoading } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import { type HomeLayoutProps } from "@/types";

const HomeLayoutComponent: FC<HomeLayoutProps> = ({
  children,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md z-50 transition-all duration-300"
      >
        Chuyển đến nội dung chính
      </a>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MovieBooking",
            description: "Nền tảng đặt vé phim trực tuyến hàng đầu Việt Nam",
            url: "https://moviebooking.com",
            logo: "https://moviebooking.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+84-1900-1234",
              contactType: "customer service",
              availableLanguage: "Vietnamese",
            },
            sameAs: [
              "https://facebook.com/moviebooking",
              "https://twitter.com/moviebooking",
              "https://instagram.com/moviebooking",
              "https://youtube.com/moviebooking",
            ],
          }),
        }}
      />

      {/* Main Layout Structure */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header role="banner">
          <Header />
        </header>

        {/* Main Content */}
        <Contents>
          <Suspense fallback={<LayoutLoading />}>{children}</Suspense>
        </Contents>

        {/* Footer */}
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(
              100,
              (window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
                100
            )}%`,
          }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 space-y-3">
        {/* WhatsApp Support */}
        <a
          href="https://wa.me/849001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
          aria-label="Hỗ trợ qua WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>

        {/* Phone Support */}
        <a
          href="tel:19001234"
          className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
          aria-label="Gọi hỗ trợ"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>

      {/* Toast Container */}
      <Toaster />
    </div>
  );
};

export default HomeLayoutComponent;
