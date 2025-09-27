import { type FC, type JSX, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Star, Phone, Clock, Car, Wifi } from "lucide-react";
import { useTitle } from "@/hooks";

const CinemasPage: FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  // Set page title
  useTitle();

  const districts = [
    { id: "all", name: "Tất cả quận" },
    { id: "q1", name: "Quận 1" },
    { id: "q2", name: "Quận 2" },
    { id: "q3", name: "Quận 3" },
    { id: "q7", name: "Quận 7" },
    { id: "q10", name: "Quận 10" },
  ];

  const cinemas = [
    {
      id: 1,
      name: "CGV Landmark 81",
      district: "q1",
      address: "Tầng 3, Landmark 81, Quận Bình Thạnh",
      phone: "1900 6017",
      rating: 4.8,
      screens: 8,
      facilities: ["IMAX", "4DX", "Parking", "WiFi"],
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Lotte Cinema Diamond Plaza",
      district: "q1",
      address: "Tầng 4, Diamond Plaza, 34 Lê Duẩn, Quận 1",
      phone: "1900 1234",
      rating: 4.6,
      screens: 6,
      facilities: ["IMAX", "Parking", "WiFi"],
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Galaxy Cinema Nguyễn Du",
      district: "q1",
      address: "116 Nguyễn Du, Quận 1",
      phone: "1900 2224",
      rating: 4.5,
      screens: 5,
      facilities: ["Parking", "WiFi"],
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "CGV Crescent Mall",
      district: "q7",
      address: "Tầng 3, Crescent Mall, Quận 7",
      phone: "1900 6017",
      rating: 4.7,
      screens: 7,
      facilities: ["IMAX", "4DX", "Parking", "WiFi"],
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      name: "Lotte Cinema Nowzone",
      district: "q10",
      address: "Tầng 4, Nowzone, 235 Nguyễn Văn Cừ, Quận 5",
      phone: "1900 1234",
      rating: 4.4,
      screens: 4,
      facilities: ["Parking", "WiFi"],
      image: "/api/placeholder/400/300",
    },
  ];

  const filteredCinemas = cinemas.filter((cinema) => {
    const matchesSearch =
      cinema.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cinema.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict =
      selectedDistrict === "all" || cinema.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            Rạp chiếu phim
          </h1>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm rạp chiếu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
              />
            </div>

            {/* District Filter */}
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
              >
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cinemas Grid */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {filteredCinemas.map((cinema) => (
            <div
              key={cinema.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Cinema Image */}
              <div className="h-32 md:h-48 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                <MapPin className="w-8 h-8 md:w-16 md:h-16 text-white" />
              </div>

              {/* Cinema Info */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{cinema.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 font-semibold">{cinema.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cinema.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cinema.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {cinema.screens} phòng chiếu
                    </span>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tiện ích:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cinema.facilities.map((facility) => (
                      <span
                        key={facility}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to="/cinemas/$cinemaId"
                    params={{ cinemaId: cinema.id.toString() }}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm text-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    Chi tiết
                  </Link>
                  <Link
                    to="/movies"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Xem phim
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCinemas.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy rạp chiếu
            </h3>
            <p className="text-gray-600">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn quận khác.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { CinemasPage };
