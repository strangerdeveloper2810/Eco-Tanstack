import { type FC, type JSX } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { Play, Star, Clock, Calendar, MapPin, Users } from "lucide-react";

const MovieDetailPage: FC = (): JSX.Element => {
  const { movieId } = useParams({ from: "/movies/$movieId" });

  // Mock data - trong thực tế sẽ fetch từ API
  const movie = {
    id: movieId,
    title: "Avengers: Endgame",
    genre: "Hành động",
    rating: 4.8,
    duration: "181 phút",
    releaseDate: "2023-04-26",
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    description:
      "Sau những sự kiện tàn phá của Avengers: Infinity War, vũ trụ đang trong tình trạng hỗn loạn. Với sự giúp đỡ của các đồng minh còn lại, Avengers tập hợp lại để đảo ngược hành động của Thanos và khôi phục lại trật tự cho vũ trụ.",
    image: "/api/placeholder/600/400",
    trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  const showtimes = [
    { time: "09:00", price: "120,000 VNĐ", seats: 45 },
    { time: "12:30", price: "150,000 VNĐ", seats: 32 },
    { time: "16:00", price: "150,000 VNĐ", seats: 28 },
    { time: "19:30", price: "180,000 VNĐ", seats: 15 },
    { time: "22:00", price: "180,000 VNĐ", seats: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Movie Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Movie Poster */}
            <div className="lg:col-span-1">
              <div className="relative h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Play className="w-20 h-20 text-white opacity-80" />
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                  {movie.duration}
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{movie.rating}</span>
                </div>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {movie.genre}
                </span>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {movie.duration}
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {movie.releaseDate}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Đạo diễn:</h3>
                <p className="text-gray-200">{movie.director}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Diễn viên:</h3>
                <p className="text-gray-200">{movie.cast}</p>
              </div>

              <Link
                to="/booking"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Đặt vé ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Nội dung phim</h2>
              <p className="text-gray-700 leading-relaxed">
                {movie.description}
              </p>
            </div>
          </div>

          {/* Showtimes */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Suất chiếu</h2>
              <div className="space-y-3">
                {showtimes.map((showtime, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold">{showtime.time}</div>
                      <div className="text-sm text-gray-600">
                        {showtime.price}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {showtime.seats} ghế
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/booking"
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg text-center font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 block"
              >
                Chọn suất chiếu
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Movies */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Phim liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Phim liên quan {id}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm">4.{id}</span>
                    </div>
                    <Link
                      to="/movies/$movieId"
                      params={{ movieId: id.toString() }}
                      className="text-purple-600 hover:text-purple-700 text-sm font-semibold"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetailPage };
