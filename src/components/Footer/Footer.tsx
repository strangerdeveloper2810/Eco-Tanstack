import { type FC, type JSX } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CreditCard,
  Shield,
  Award,
  Heart,
} from "lucide-react";

import { footerLinks, socialLinks } from "@/constants/footerItem";

const FooterComponent: FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white animate-fade-in-up">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold">MovieBooking</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nền tảng đặt vé phim trực tuyến hàng đầu Việt Nam. Trải nghiệm
              điện ảnh tuyệt vời với giá vé tốt nhất.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Nguyễn Huệ, Q1, TP.HCM
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">1900 1234</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">support@moviebooking.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-gray-400">24/7 Hỗ trợ</span>
              </div>
            </div>
          </div>

          {/* Movies */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Phim</h4>
            <ul className="space-y-2">
              {footerLinks.movies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cinemas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              Rạp chiếu
            </h4>
            <ul className="space-y-2">
              {footerLinks.cinemas.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              Hỗ trợ
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              Công ty
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm">Thanh toán an toàn</h5>
                <p className="text-gray-400 text-xs">Bảo mật 100%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm">Bảo hành vé</h5>
                <p className="text-gray-400 text-xs">Hoàn tiền 100%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm">Dịch vụ tốt nhất</h5>
                <p className="text-gray-400 text-xs">Được tin dùng</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>
                © {currentYear} MovieBooking. Tất cả quyền được bảo lưu.
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 text-purple-500 mx-1" /> in
                Vietnam
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Theo dõi chúng tôi:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">
                Chấp nhận thanh toán:
              </span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-green-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  ATM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
