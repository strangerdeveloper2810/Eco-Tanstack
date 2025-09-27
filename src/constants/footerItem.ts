import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
const footerLinks = {
    movies: [
      { name: "Phim đang chiếu", href: "/movies/now-showing" },
      { name: "Phim sắp chiếu", href: "/movies/coming-soon" },
      { name: "Phim 3D", href: "/movies/3d" },
      { name: "Phim IMAX", href: "/movies/imax" },
      { name: "Phim bom tấn", href: "/movies/blockbuster" },
    ],
    cinemas: [
      { name: "Tất cả rạp", href: "/cinemas" },
      { name: "Rạp tại Hà Nội", href: "/cinemas/hanoi" },
      { name: "Rạp tại TP.HCM", href: "/cinemas/hcm" },
      { name: "Rạp tại Đà Nẵng", href: "/cinemas/danang" },
      { name: "Rạp tại Cần Thơ", href: "/cinemas/cantho" },
    ],
    support: [
      { name: "Hướng dẫn đặt vé", href: "/help/booking" },
      { name: "Câu hỏi thường gặp", href: "/help/faq" },
      { name: "Liên hệ hỗ trợ", href: "/contact" },
      { name: "Phản hồi dịch vụ", href: "/feedback" },
      { name: "Báo lỗi", href: "/report-bug" },
    ],
    company: [
      { name: "Giới thiệu", href: "/about" },
      { name: "Tin tức", href: "/news" },
      { name: "Tuyển dụng", href: "/careers" },
      { name: "Đối tác", href: "/partners" },
      { name: "Điều khoản sử dụng", href: "/terms" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/moviebooking",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/moviebooking",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/moviebooking",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/moviebooking",
      color: "hover:text-red-600",
    },
  ];

export { footerLinks, socialLinks };