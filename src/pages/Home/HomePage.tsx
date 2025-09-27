import { type FC, type JSX } from "react";
import { Link } from "@tanstack/react-router";
import { Play, Star, Calendar, MapPin } from "lucide-react";
import { useTitle } from "@/hooks";

const HomePage: FC = (): JSX.Element => {
  // Set page title
  useTitle();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in-down">
              Chào mừng đến với MovieBooking
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 animate-fade-in-up px-4">
              Nền tảng đặt vé phim trực tuyến hàng đầu Việt Nam. Trải nghiệm
              điện ảnh tuyệt vời với giá vé tốt nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up px-4">
              <Link
                to="/movies"
                className="bg-white text-purple-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-center"
              >
                Xem phim ngay
              </Link>
              <Link
                to="/cinemas"
                className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 text-center"
              >
                Tìm rạp chiếu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Tại sao chọn MovieBooking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Phim đa dạng
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Hàng nghìn bộ phim từ Hollywood đến phim Việt Nam, đáp ứng mọi
                sở thích của bạn.
              </p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Chất lượng cao
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Rạp chiếu hiện đại với công nghệ IMAX, 4DX, mang đến trải nghiệm
                xem phim tuyệt vời.
              </p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Đặt vé dễ dàng
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Giao diện thân thiện, thanh toán an toàn, đặt vé chỉ trong vài
                phút.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Movies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Phim đang hot
            </h2>
            <Link
              to="/movies"
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
            >
              Xem tất cả
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((movie) => (
              <div
                key={movie}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="h-32 md:h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">
                    Phim {movie}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3">
                    Thể loại: Hành động
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-xs md:text-sm">4.{movie}</span>
                    </div>
                    <Link
                      to="/booking"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Đặt vé
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinemas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Rạp chiếu nổi bật
            </h2>
            <Link
              to="/cinemas"
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
            >
              Xem tất cả
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((cinema) => (
              <div
                key={cinema}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="h-32 md:h-48 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <MapPin className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">
                    Rạp chiếu {cinema}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-3">
                    Quận {cinema}, TP.HCM
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-gray-500">
                      5 phòng chiếu
                    </span>
                    <Link
                      to="/cinemas"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { HomePage };
