import { type FC, type JSX, type ErrorInfo } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  ErrorBoundary as ReactErrorBoundary,
  type FallbackProps,
} from "react-error-boundary";
import { type ErrorBoundaryProps } from "@/types";

// Default Error Fallback Component
const DefaultErrorFallback: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Có lỗi xảy ra
        </h1>

        <p className="text-gray-600 mb-6">
          Xin lỗi, có vẻ như đã xảy ra lỗi không mong muốn. Vui lòng thử lại
          sau.
        </p>

        {import.meta.env.MODE === "development" && error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="text-sm font-semibold text-red-800 mb-2">
              Error Details:
            </h3>
            <pre className="text-xs text-red-700 whitespace-pre-wrap break-words">
              {error.message}
            </pre>
            {error.stack && (
              <details className="mt-2">
                <summary className="text-xs text-red-600 cursor-pointer hover:text-red-800">
                  Stack Trace
                </summary>
                <pre className="text-xs text-red-600 whitespace-pre-wrap break-words mt-1">
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Thử lại
          </button>

          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
          >
            <Home className="w-4 h-4 mr-2" />
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

// Error logging function
const logError = (error: Error, errorInfo: ErrorInfo) => {
  console.error("ErrorBoundary caught an error:", error, errorInfo);

  // You can also send to error reporting service here
  // Example: Sentry.captureException(error, { extra: errorInfo });
};

const ErrorBoundary: FC<ErrorBoundaryProps> = ({
  children,
  fallback,
  onError = logError,
  onReset,
}): JSX.Element => {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback || DefaultErrorFallback}
      onError={onError}
      onReset={onReset}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
