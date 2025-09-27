import { type FC, type JSX } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { MapPin, Star, Phone, Clock, Car, Wifi, Play } from "lucide-react";

const CinemaDetailPage: FC = (): JSX.Element => {
  const { cinemaId } = useParams({ from: "/cinemas/$cinemaId" });

  // Mock data
  const cinema = {
    id: cinemaId,
    name: "CGV Landmark 81",
    address: "Tầng 3, Landmark 81, Quận Bình Thạnh",
    phone: "1900 6017",
    rating: 4.8,
    screens: 8,
    facilities: ["IMAX", "4DX", "Parking", "WiFi"],
    description:
      "Rạp chiếu hiện đại với công nghệ IMAX và 4DX, mang đến trải nghiệm xem phim tuyệt vời.",
    openingHours: "09:00 - 23:00",
  };

  const movies = [
    { id: 1, title: "Avengers: Endgame", time: "19:30", price: "180,000 VNĐ" },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      time: "21:00",
      price: "180,000 VNĐ",
    },
    { id: 3, title: "The Batman", time: "16:00", price: "150,000 VNĐ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cinema Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{cinema.name}</h1>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{cinema.rating}</span>
            <span className="ml-4">{cinema.screens} phòng chiếu</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{cinema.address}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cinema Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Thông tin rạp chiếu</h2>
              <p className="text-gray-700 mb-4">{cinema.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 mr-3" />
                  <span>{cinema.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-3" />
                  <span>{cinema.openingHours}</span>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Tiện ích</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cinema.facilities.map((facility) => (
                  <div
                    key={facility}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      {facility === "IMAX" && (
                        <Play className="w-6 h-6 text-white" />
                      )}
                      {facility === "4DX" && (
                        <Play className="w-6 h-6 text-white" />
                      )}
                      {facility === "Parking" && (
                        <Car className="w-6 h-6 text-white" />
                      )}
                      {facility === "WiFi" && (
                        <Wifi className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-semibold">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Movies */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Phim đang chiếu</h2>
              <div className="space-y-4">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="font-semibold mb-2">{movie.title}</h3>
                    <div className="text-sm text-gray-600 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {movie.time}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {movie.price}
                    </div>
                    <Link
                      to="/booking"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg text-center text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 block"
                    >
                      Đặt vé
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CinemaDetailPage };
