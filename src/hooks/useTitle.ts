import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { type UseTitleProps } from "@/types";

// Route title mapping
const routeTitles: Record<string, string> = {
  "/": "Trang chủ - MovieBooking",
  "/movies": "Phim - MovieBooking",
  "/movies/now-showing": "Phim đang chiếu - MovieBooking",
  "/movies/coming-soon": "Phim sắp chiếu - MovieBooking",
  "/cinemas": "Rạp chiếu - MovieBooking",
  "/news": "Tin tức - MovieBooking",
  "/contact": "Liên hệ - MovieBooking",
  "/test-error": "Test Error - MovieBooking",
  "/login": "Đăng nhập - MovieBooking",
  "/register": "Đăng ký - MovieBooking",
  "/profile": "Hồ sơ - MovieBooking",
  "/booking": "Đặt vé - MovieBooking",
};

// Default title fallback
const DEFAULT_TITLE = "MovieBooking - Đặt vé phim trực tuyến";

/**
 * Custom hook để tự động cập nhật document title dựa trên current route
 *
 * @param customTitle - Optional custom title để override route title
 * @param suffix - Optional suffix để thêm vào cuối title (default: không có)
 *
 * @example
 * ```typescript
 * // Sử dụng title mặc định từ route
 * useTitle();
 *
 * // Sử dụng custom title
 * useTitle("Custom Page Title");
 *
 * // Sử dụng custom title với suffix
 * useTitle("Movie Detail", " - Avengers: Endgame");
 * ```
 */
export const useTitle = ({ customTitle, suffix }: UseTitleProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Determine the title to use
    let title: string;

    if (customTitle) {
      // Use custom title if provided
      title = customTitle;
    } else {
      // Use route-based title
      title = routeTitles[location.pathname] || DEFAULT_TITLE;
    }

    // Add suffix if provided
    if (suffix) {
      title += suffix;
    }

    // Update document title
    document.title = title;

    // Optional: Update meta description based on route
    updateMetaDescription(location.pathname);

    // Optional: Update Open Graph title
    updateOpenGraphTitle(title);
  }, [location.pathname, customTitle, suffix]);
};

/**
 * Update meta description based on route
 */
const updateMetaDescription = (pathname: string) => {
  const descriptions: Record<string, string> = {
    "/": "Đặt vé phim trực tuyến tại MovieBooking. Xem phim mới nhất với giá vé tốt nhất tại các rạp chiếu hàng đầu Việt Nam.",
    "/movies":
      "Khám phá các bộ phim mới nhất tại MovieBooking. Phim đang chiếu, phim sắp chiếu với đầy đủ thông tin và đánh giá.",
    "/movies/now-showing":
      "Phim đang chiếu tại các rạp. Xem lịch chiếu, đặt vé ngay với giá tốt nhất tại MovieBooking.",
    "/movies/coming-soon":
      "Phim sắp chiếu sắp tới. Cập nhật thông tin phim mới, trailer và lịch chiếu tại MovieBooking.",
    "/cinemas":
      "Danh sách rạp chiếu phim tại Việt Nam. Tìm rạp chiếu gần nhất với đầy đủ thông tin và tiện ích.",
    "/news":
      "Tin tức điện ảnh mới nhất. Cập nhật thông tin phim, rạp chiếu và các sự kiện điện ảnh tại MovieBooking.",
    "/contact":
      "Liên hệ với MovieBooking. Hỗ trợ khách hàng 24/7, thông tin liên hệ và chi nhánh.",
    "/login":
      "Đăng nhập tài khoản MovieBooking để đặt vé phim và quản lý thông tin cá nhân.",
    "/register":
      "Đăng ký tài khoản MovieBooking miễn phí. Tận hưởng ưu đãi đặc biệt khi đặt vé phim.",
    "/profile": "Quản lý hồ sơ cá nhân và lịch sử đặt vé tại MovieBooking.",
    "/booking":
      "Đặt vé phim trực tuyến. Chọn ghế, thanh toán an toàn và nhận vé điện tử tại MovieBooking.",
  };

  const description = descriptions[pathname] || descriptions["/"];

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);

  // Update Open Graph description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute("content", description);
};

/**
 * Update Open Graph title
 */
const updateOpenGraphTitle = (title: string) => {
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute("content", title);

  // Update Twitter title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (!twitterTitle) {
    twitterTitle = document.createElement("meta");
    twitterTitle.setAttribute("name", "twitter:title");
    document.head.appendChild(twitterTitle);
  }
  twitterTitle.setAttribute("content", title);
};

/**
 * Utility function để set title manually
 *
 * @param title - Title to set
 * @param suffix - Optional suffix
 */
export const setTitle = (title: string, suffix?: string) => {
  const fullTitle = suffix ? `${title}${suffix}` : title;
  document.title = fullTitle;
  updateOpenGraphTitle(fullTitle);
};

/**
 * Utility function để get current title
 */
export const getTitle = (): string => {
  return document.title;
};

/**
 * Utility function để reset title về default
 */
export const resetTitle = () => {
  document.title = DEFAULT_TITLE;
  updateOpenGraphTitle(DEFAULT_TITLE);
};

export default useTitle;
