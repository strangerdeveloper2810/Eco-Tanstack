import { type FC, type JSX } from "react";

// Root Loading Component (for App initialization)
export const RootLoading: FC = (): JSX.Element => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-6 animate-pulse">
        <span className="text-white font-bold text-3xl">M</span>
      </div>
      <div className="text-2xl font-semibold text-gray-900 mb-3">
        MovieBooking
      </div>
      <div className="text-gray-600 mb-4">Đang khởi tạo ứng dụng...</div>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Page Loading Component (for route changes)
export const PageLoading: FC = (): JSX.Element => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
        <span className="text-white font-bold text-2xl">M</span>
      </div>
      <div className="text-xl font-semibold text-gray-900 mb-2">
        MovieBooking
      </div>
      <div className="text-gray-600">Đang tải...</div>
      <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Layout Loading Component (for Outlet loading)
export const LayoutLoading: FC = (): JSX.Element => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
        <span className="text-white font-bold text-2xl">M</span>
      </div>
      <div className="text-xl font-semibold text-gray-900 mb-2">
        MovieBooking
      </div>
      <div className="text-gray-600">Đang tải trang...</div>
      <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Small Loading Component (for inline loading)
export const SmallLoading: FC = (): JSX.Element => (
  <div className="flex items-center justify-center py-8">
    <div className="text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <div className="text-gray-600 text-sm">Đang tải...</div>
    </div>
  </div>
);

// Skeleton Loading Components
export const MovieCardSkeleton: FC = (): JSX.Element => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

export const CinemaCardSkeleton: FC = (): JSX.Element => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-32 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-5 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

export const TextSkeleton: FC<{ lines?: number; className?: string }> = ({
  lines = 1,
  className = "",
}): JSX.Element => (
  <div className={className}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-300 rounded animate-pulse ${
          index < lines - 1 ? "mb-2" : ""
        }`}
      ></div>
    ))}
  </div>
);
