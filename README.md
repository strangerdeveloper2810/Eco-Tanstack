# 🎬 MovieBooking - Đặt vé phim trực tuyến

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-1.0+-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://tanstack.com/router)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Nền tảng đặt vé phim trực tuyến hàng đầu Việt Nam** - Trải nghiệm điện ảnh tuyệt vời với giá vé tốt nhất tại các rạp chiếu hàng đầu.

## 📋 Mục lục

- [✨ Tính năng](#-tính-năng)
- [🛠️ Công nghệ sử dụng](#️-công-nghệ-sử-dụng)
- [🚀 Cài đặt và chạy dự án](#-cài-đặt-và-chạy-dự-án)
- [📁 Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [🎯 Tính năng chính](#-tính-năng-chính)
- [🔧 Scripts](#-scripts)
- [📱 Responsive Design](#-responsive-design)
- [🎨 UI/UX Features](#-uiux-features)
- [🔍 SEO & Performance](#-seo--performance)
- [🧪 Testing](#-testing)
- [📦 Build & Deploy](#-build--deploy)
- [🤝 Đóng góp](#-đóng-góp)
- [📄 License](#-license)

## ✨ Tính năng

### 🎬 **Core Features**

- **Đặt vé phim trực tuyến** - Giao diện thân thiện, dễ sử dụng
- **Tìm kiếm phim thông minh** - Tìm kiếm theo tên, thể loại, diễn viên
- **Lịch chiếu real-time** - Cập nhật lịch chiếu theo thời gian thực
- **Chọn ghế ngồi** - Hệ thống chọn ghế trực quan
- **Thanh toán an toàn** - Hỗ trợ nhiều phương thức thanh toán

### 🏢 **Cinema Management**

- **Danh sách rạp chiếu** - Tìm rạp chiếu gần nhất
- **Thông tin chi tiết rạp** - Địa chỉ, tiện ích, liên hệ
- **Đánh giá rạp chiếu** - Review từ khách hàng
- **Lịch chiếu theo rạp** - Xem phim đang chiếu tại từng rạp

### 📰 **Content & News**

- **Tin tức điện ảnh** - Cập nhật tin tức mới nhất
- **Review phim** - Đánh giá và nhận xét từ chuyên gia
- **Trailer & Media** - Xem trailer, hình ảnh phim
- **Sự kiện đặc biệt** - Thông tin về các sự kiện điện ảnh

### 👤 **User Experience**

- **Đăng ký/Đăng nhập** - Tài khoản cá nhân
- **Lịch sử đặt vé** - Quản lý vé đã đặt
- **Thông báo** - Cập nhật về phim mới, ưu đãi
- **Hỗ trợ khách hàng** - Chat trực tuyến, hotline

## 🛠️ Công nghệ sử dụng

### **Frontend Core**

- **React 18+** - UI Framework với Hooks và Suspense
- **TypeScript 5.0+** - Type safety và developer experience
- **TanStack Router** - Type-safe routing với file-based routing
- **Tailwind CSS 4.0** - Utility-first CSS framework

### **Build Tools**

- **Vite 7.0** - Fast build tool và dev server
- **ESBuild** - Ultra-fast bundler
- **PostCSS** - CSS processing

### **State Management**

- **TanStack Query** - Server state management
- **Zustand** - Client state management (optional)
- **React Context** - Component state sharing

### **UI Components**

- **Lucide React** - Beautiful icon library
- **Headless UI** - Unstyled accessible components
- **React Error Boundary** - Error handling

### **Development Tools**

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **TanStack Router Devtools** - Route debugging

## 🚀 Cài đặt và chạy dự án

### **Yêu cầu hệ thống**

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recommended) hoặc npm >= 9.0.0

### **Cài đặt dependencies**

```bash
# Clone repository
git clone https://github.com/your-username/moviebooking.git
cd moviebooking

# Install dependencies
pnpm install
# hoặc
npm install
```

### **Chạy development server**

```bash
# Development mode
pnpm dev
# hoặc
npm run dev

# Mở browser tại http://localhost:3000
```

### **Build production**

```bash
# Build client-side
pnpm build
# hoặc
npm run build

# Build SSR (Server-Side Rendering)
pnpm build:ssr
# hoặc
npm run build:ssr
```

### **Preview production build**

```bash
# Preview CSR build
pnpm preview
# hoặc
npm run preview

# Preview SSR build
pnpm preview:ssr
# hoặc
npm run preview:ssr
```

## 📁 Cấu trúc thư mục

```
src/
├── components/           # Reusable components
│   ├── Header/          # Navigation header
│   ├── Footer/          # Site footer
│   ├── Contents/        # Main content wrapper
│   ├── ErrorBoundary/   # Error handling
│   ├── Loading/         # Loading components
│   ├── SuspenseWrapper/ # Suspense boundaries
│   └── TestError/       # Error testing component
├── pages/               # Page components
│   ├── Home/           # Homepage
│   ├── Movies/         # Movies listing & detail
│   ├── Cinemas/        # Cinemas listing & detail
│   ├── News/           # News & articles
│   ├── Contact/        # Contact page
│   ├── Auth/           # Login/Register
│   ├── Profile/        # User profile
│   ├── Booking/        # Booking flow
│   └── NotFound/       # 404 page
├── layouts/            # Layout components
│   └── Home/           # Main layout
├── hooks/              # Custom hooks
│   └── useTitle.ts     # Dynamic title management
├── constants/          # App constants
│   ├── navigationItem.ts
│   └── footerItem.ts
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   └── setting.ts      # API configuration
├── router.tsx          # TanStack Router config
├── App.tsx             # Main app component
├── main.tsx            # Development entry
├── entry-client.tsx    # Production CSR entry
└── entry-server.tsx    # Production SSR entry
```

## 🎯 Tính năng chính

### **🎬 Movie Management**

```typescript
// Dynamic movie data với TypeScript
interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  duration: number;
  rating: number;
  releaseDate: string;
  poster: string;
  trailer: string;
  showtimes: Showtime[];
}
```

### **🏢 Cinema System**

```typescript
// Cinema information với facilities
interface Cinema {
  id: string;
  name: string;
  address: string;
  phone: string;
  facilities: string[];
  screens: Screen[];
  movies: Movie[];
}
```

### **🎫 Booking Flow**

```typescript
// Complete booking process
interface Booking {
  id: string;
  movieId: string;
  cinemaId: string;
  showtimeId: string;
  seats: Seat[];
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
}
```

## 🔧 Scripts

### **Development**

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### **SSR (Server-Side Rendering)**

```bash
pnpm build:ssr    # Build SSR bundle
pnpm preview:ssr  # Preview SSR build
pnpm server       # Start SSR server
```

### **Code Quality**

```bash
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm type-check   # TypeScript type checking
```

### **Testing**

```bash
pnpm test         # Run tests
pnpm test:watch   # Run tests in watch mode
pnpm test:coverage # Run tests with coverage
```

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile-First Approach**

```css
/* Mobile first, then scale up */
.container {
  @apply px-4 py-2; /* Mobile */
  @apply md:px-6 md:py-4; /* Tablet */
  @apply lg:px-8 lg:py-6; /* Desktop */
}
```

### **Touch-Friendly UI**

- Minimum 44px touch targets
- Swipe gestures for navigation
- Optimized for thumb navigation

## 🎨 UI/UX Features

### **Design System**

- **Color Palette**: Purple-Pink-Red gradient theme
- **Typography**: Inter font family với multiple weights
- **Spacing**: Consistent 4px grid system
- **Animations**: Smooth transitions và micro-interactions

### **Accessibility**

- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Focus indicators** visible

### **Performance**

- **Lazy loading** cho images và components
- **Code splitting** với dynamic imports
- **Suspense boundaries** cho better UX
- **Error boundaries** cho error handling

## 🔍 SEO & Performance

### **SEO Features**

- **Dynamic meta tags** với useTitle hook
- **Open Graph** và Twitter Cards
- **Structured data** (JSON-LD)
- **Sitemap** generation
- **Robots.txt** configuration

### **Performance Optimization**

- **Vite** cho fast builds
- **Tree shaking** cho smaller bundles
- **Image optimization** với lazy loading
- **CSS purging** với Tailwind
- **Service Worker** cho caching

### **Analytics**

- **Google Analytics** integration
- **Performance monitoring**
- **User behavior tracking**
- **Error reporting**

## 🧪 Testing

### **Testing Strategy**

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component testing
- **E2E Tests**: Playwright
- **Visual Regression**: Chromatic

### **Error Boundary Testing**

```typescript
// Test error boundary functionality
const TestError = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Test error for ErrorBoundary");
  }

  return <button onClick={() => setShouldThrow(true)}>Trigger Error</button>;
};
```

## 📦 Build & Deploy

### **Build Process**

1. **TypeScript compilation**
2. **Vite bundling** với optimizations
3. **Asset optimization** (images, CSS, JS)
4. **Code splitting** cho better performance

### **Deployment Options**

- **Vercel** - Zero-config deployment
- **Netlify** - JAMstack hosting
- **AWS S3 + CloudFront** - Static hosting
- **Docker** - Container deployment

### **Environment Variables**

```bash
# .env.local
VITE_API_URL=https://api.moviebooking.com
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_SENTRY_DSN=https://sentry.io/dsn
```

## 🤝 Đóng góp

### **Contribution Guidelines**

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### **Code Standards**

- **ESLint** configuration
- **Prettier** formatting
- **TypeScript** strict mode
- **Conventional Commits**

### **Development Workflow**

```bash
# Setup development environment
pnpm install
pnpm dev

# Run tests before committing
pnpm test
pnpm lint
pnpm type-check

# Build to verify
pnpm build
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Liên hệ

- **Project Link**: [https://github.com/your-username/moviebooking](https://github.com/your-username/moviebooking)
- **Live Demo**: [https://moviebooking.vercel.app](https://moviebooking.vercel.app)
- **Email**: support@moviebooking.com
- **Phone**: 1900 1234

---

<div align="center">

**Made with ❤️ in Vietnam**

[![GitHub stars](https://img.shields.io/github/stars/your-username/moviebooking?style=social)](https://github.com/your-username/moviebooking)
[![GitHub forks](https://img.shields.io/github/forks/your-username/moviebooking?style=social)](https://github.com/your-username/moviebooking)
[![GitHub issues](https://img.shields.io/github/issues/your-username/moviebooking)](https://github.com/your-username/moviebooking/issues)

</div>
