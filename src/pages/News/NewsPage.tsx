import { type FC, type JSX } from "react";
import { Calendar, User, Eye, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTitle } from "@/hooks";

// Mock data cho tin tức
const mockNews = [
  {
    id: 1,
    title: "Avengers: Endgame phá kỷ lục doanh thu tại Việt Nam",
    excerpt:
      "Bộ phim siêu anh hùng của Marvel đã thu về hơn 200 tỷ đồng trong tuần đầu công chiếu tại Việt Nam.",
    content:
      "Avengers: Endgame đã chính thức trở thành bộ phim có doanh thu cao nhất trong lịch sử điện ảnh Việt Nam. Với sự hội tụ của các siêu anh hùng Marvel, bộ phim đã thu hút hàng triệu lượt khán giả đến rạp chiếu.",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=250&fit=crop",
    author: "Nguyễn Văn A",
    publishDate: "2024-01-15",
    views: 15420,
    category: "Phim ảnh",
    tags: ["Marvel", "Avengers", "Superhero"],
  },
  {
    id: 2,
    title: "Rạp chiếu CGV mở cửa tại trung tâm thương mại mới",
    excerpt:
      "Hệ thống rạp chiếu CGV vừa khai trương rạp mới với 8 phòng chiếu tại trung tâm thương mại Vincom Mega Mall.",
    content:
      "Rạp chiếu CGV mới được trang bị công nghệ IMAX và Dolby Atmos hiện đại nhất, mang đến trải nghiệm xem phim tuyệt vời cho khán giả. Đây là rạp chiếu thứ 15 của CGV tại TP.HCM.",
    image:
      "https://images.unsplash.com/photo-1489599808427-516a0fa4a4d0?w=400&h=250&fit=crop",
    author: "Trần Thị B",
    publishDate: "2024-01-12",
    views: 8930,
    category: "Rạp chiếu",
    tags: ["CGV", "IMAX", "Dolby Atmos"],
  },
  {
    id: 3,
    title: "Lễ trao giải Oscar 2024: Những ứng cử viên sáng giá",
    excerpt:
      "Danh sách đề cử Oscar 2024 đã được công bố với nhiều bộ phim xuất sắc tranh giải thưởng danh giá nhất.",
    content:
      "Năm nay, các bộ phim như Oppenheimer, Barbie, và Killers of the Flower Moon đang là những ứng cử viên sáng giá nhất cho giải Oscar. Lễ trao giải sẽ diễn ra vào tháng 3/2024.",
    image:
      "https://images.unsplash.com/photo-1489599808427-516a0fa4a4d0?w=400&h=250&fit=crop",
    author: "Lê Văn C",
    publishDate: "2024-01-10",
    views: 12650,
    category: "Giải thưởng",
    tags: ["Oscar", "Awards", "Cinema"],
  },
  {
    id: 4,
    title: "Công nghệ 3D mới trong điện ảnh Việt Nam",
    excerpt:
      "Các nhà sản xuất phim Việt Nam đang áp dụng công nghệ 3D tiên tiến để nâng cao chất lượng sản phẩm.",
    content:
      "Với sự hỗ trợ của công nghệ 3D mới, các bộ phim Việt Nam đang có những bước tiến đáng kể về mặt hình ảnh và hiệu ứng. Điều này giúp thu hút thêm nhiều khán giả đến rạp chiếu.",
    image:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=250&fit=crop",
    author: "Phạm Thị D",
    publishDate: "2024-01-08",
    views: 7820,
    category: "Công nghệ",
    tags: ["3D", "Technology", "Vietnamese Cinema"],
  },
  {
    id: 5,
    title: "Festival phim quốc tế Hà Nội 2024",
    excerpt:
      "Festival phim quốc tế Hà Nội sẽ diễn ra từ 15-20/3/2024 với sự tham gia của hơn 50 bộ phim từ khắp thế giới.",
    content:
      "Festival phim quốc tế Hà Nội là sự kiện điện ảnh lớn nhất tại Việt Nam, quy tụ các nhà làm phim, diễn viên và khán giả yêu điện ảnh từ khắp nơi trên thế giới.",
    image:
      "https://images.unsplash.com/photo-1489599808427-516a0fa4a4d0?w=400&h=250&fit=crop",
    author: "Hoàng Văn E",
    publishDate: "2024-01-05",
    views: 11200,
    category: "Sự kiện",
    tags: ["Festival", "International", "Hanoi"],
  },
  {
    id: 6,
    title: "Xu hướng phim kinh dị Việt Nam năm 2024",
    excerpt:
      "Thể loại phim kinh dị đang có sự phát triển mạnh mẽ tại Việt Nam với nhiều tác phẩm chất lượng cao.",
    content:
      "Các nhà làm phim Việt Nam đang khám phá thể loại kinh dị với những câu chuyện mang đậm bản sắc văn hóa địa phương. Điều này tạo ra sự khác biệt và thu hút khán giả.",
    image:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=250&fit=crop",
    author: "Vũ Thị F",
    publishDate: "2024-01-03",
    views: 9650,
    category: "Thể loại",
    tags: ["Horror", "Vietnamese", "Trend"],
  },
];

const NewsPage: FC = (): JSX.Element => {
  // Set page title
  useTitle();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tin tức điện ảnh
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Cập nhật những tin tức mới nhất về phim ảnh, rạp chiếu và các sự
              kiện điện ảnh
            </p>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Tin tức nổi bật
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={mockNews[0].image}
                  alt={mockNews[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                    {mockNews[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(mockNews[0].publishDate).toLocaleDateString(
                      "vi-VN"
                    )}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {mockNews[0].title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mockNews[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {mockNews[0].author}
                    <Eye className="w-4 h-4 ml-4 mr-1" />
                    {mockNews[0].views.toLocaleString()}
                  </div>

                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Tất cả tin tức
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.slice(1).map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(news.publishDate).toLocaleDateString("vi-VN")}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {news.views.toLocaleString()}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {news.author}
                    </div>

                    <button className="flex items-center px-3 py-1 text-purple-600 hover:text-purple-700 transition-colors duration-300">
                      Đọc thêm
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {news.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium">
            Xem thêm tin tức
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
