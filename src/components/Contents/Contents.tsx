import { type FC, type JSX } from "react";
import { type ContentsProps } from "@/types";

const ContentsComponent: FC<ContentsProps> = ({ children }): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb placeholder - can be added later */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a
                  href="/"
                  className="hover:text-purple-600 transition-colors duration-300"
                >
                  Trang chủ
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Trang hiện tại</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="animate-fade-in-up">{children}</div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 z-40 opacity-0 hover:opacity-100 group"
        aria-label="Lên đầu trang"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default ContentsComponent;
