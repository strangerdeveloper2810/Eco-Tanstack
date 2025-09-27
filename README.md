# 🎬 MovieBooking - Đặt vé phim trực tuyến

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-1.0+-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://tanstack.com/router)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Dự án học tập** - Ứng dụng đặt vé phim được xây dựng với React, TypeScript và TanStack Router.

## 📋 Mục lục

- [✨ Tính năng](#-tính-năng)
- [🛠️ Công nghệ sử dụng](#️-công-nghệ-sử-dụng)
- [📁 Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [🚀 Cài đặt và chạy dự án](#-cài-đặt-và-chạy-dự-án)
- [🔧 Scripts](#-scripts)

## ✨ Tính năng

### 🎬 **Core Features**

- **Đặt vé phim trực tuyến** - Giao diện thân thiện, dễ sử dụng
- **Tìm kiếm phim** - Tìm kiếm theo tên, thể loại
- **Lịch chiếu** - Hiển thị lịch chiếu phim
- **Chọn ghế ngồi** - Hệ thống chọn ghế (UI mock)
- **Thanh toán** - Giao diện thanh toán (mock)

### 🏢 **Cinema Management**

- **Danh sách rạp chiếu** - Tìm rạp chiếu gần nhất
- **Thông tin chi tiết rạp** - Địa chỉ, tiện ích, liên hệ
- **Lịch chiếu theo rạp** - Xem phim đang chiếu tại từng rạp

### 📰 **Content & News**

- **Tin tức điện ảnh** - Trang tin tức với mock data
- **Review phim** - Đánh giá và nhận xét (mock)
- **Sự kiện đặc biệt** - Thông tin về các sự kiện điện ảnh

### 👤 **User Experience**

- **Đăng ký/Đăng nhập** - Giao diện auth (mock)
- **Lịch sử đặt vé** - Quản lý vé đã đặt (mock)
- **Hỗ trợ khách hàng** - Trang liên hệ với form

## 🛠️ Công nghệ sử dụng

### **Frontend Core**

- **React 18+** - UI Framework với Hooks và Suspense
- **TypeScript 5.0+** - Type safety và developer experience
- **TanStack Router** - Type-safe routing
- **Tailwind CSS 4.0** - Utility-first CSS framework

### **Build Tools**

- **Vite 7.0** - Fast build tool và dev server
- **ESBuild** - Ultra-fast bundler
- **PostCSS** - CSS processing

### **State Management**

- **React Context** - Component state sharing
- **TanStack Query** - Server state management (planned)

### **UI Components**

- **Lucide React** - Beautiful icon library
- **React Error Boundary** - Error handling
- **Custom Hooks** - useTitle cho dynamic page titles

### **Development Tools**

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **TanStack Router Devtools** - Route debugging

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

## 🚀 Cài đặt và chạy dự án

### **Yêu cầu hệ thống**

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recommended) hoặc npm >= 9.0.0

### **Clone source code**

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
