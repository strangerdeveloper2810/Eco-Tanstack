import { type FC, type JSX, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play, Star, Filter, Search } from "lucide-react";
import { useTitle } from "@/hooks";

const MoviesPage: FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Set page title
  useTitle();

  const genres = [
    { id: "all", name: "Tất cả" },
    { id: "action", name: "Hành động" },
    { id: "comedy", name: "Hài hước" },
    { id: "drama", name: "Tâm lý" },
    { id: "horror", name: "Kinh dị" },
    { id: "romance", name: "Lãng mạn" },
  ];

  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "action",
      rating: 4.8,
      duration: "181 phút",
      image: "/api/placeholder/300/400",
    },
    {
      id: 2,
      title: "Spider-Man: No Way Home",
      genre: "action",
      rating: 4.7,
      duration: "148 phút",
      image: "/api/placeholder/300/400",
    },
    {
      id: 3,
      title: "The Batman",
      genre: "action",
      rating: 4.6,
      duration: "176 phút",
      image: "/api/placeholder/300/400",
    },
    {
      id: 4,
      title: "Top Gun: Maverick",
      genre: "action",
      rating: 4.9,
      duration: "131 phút",
      image: "/api/placeholder/300/400",
    },
    {
      id: 5,
      title: "Minions: The Rise of Gru",
      genre: "comedy",
      rating: 4.3,
      duration: "87 phút",
      image: "/api/placeholder/300/400",
    },
    {
      id: 6,
      title: "Lightyear",
      genre: "action",
      rating: 4.2,
      duration: "105 phút",
      image: "/api/placeholder/300/400",
    },
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === "all" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            Danh sách phim
          </h1>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm phim..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
            </div>

            {/* Genre Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base"
              >
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Movie Poster */}
              <div className="relative h-40 md:h-80 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Play className="w-8 h-8 md:w-16 md:h-16 text-white opacity-80" />
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-1 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm">
                  {movie.duration}
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 line-clamp-2">
                  {movie.title}
                </h3>

                <div className="flex items-center mb-2 md:mb-3">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-xs md:text-sm font-medium">
                    {movie.rating}
                  </span>
                  <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-500">
                    {genres.find((g) => g.id === movie.genre)?.name}
                  </span>
                </div>

                <div className="flex gap-1 md:gap-2">
                  <Link
                    to="/movies/$movieId"
                    params={{ movieId: movie.id.toString() }}
                    className="flex-1 bg-gray-100 text-gray-700 px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm text-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    Chi tiết
                  </Link>
                  <Link
                    to="/booking"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Đặt vé
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy phim
            </h3>
            <p className="text-gray-600">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn thể loại khác.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { MoviesPage };
