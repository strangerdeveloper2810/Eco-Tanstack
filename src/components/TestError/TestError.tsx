import { type FC, type JSX, useState } from "react";
import { useTitle } from "@/hooks";

// Component để test ErrorBoundary
const TestError: FC = (): JSX.Element => {
  const [shouldThrow, setShouldThrow] = useState(false);

  // Set page title
  useTitle();

  // Trigger error khi shouldThrow = true
  if (shouldThrow) {
    throw new Error("Test Error: This is a test error for ErrorBoundary!");
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Test ErrorBoundary
      </h2>

      <p className="text-gray-600 mb-6">
        Click the button below to trigger an error and test the ErrorBoundary
        component.
      </p>

      <button
        onClick={() => setShouldThrow(true)}
        className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-medium"
      >
        🚨 Trigger Error
      </button>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> This will cause the component to throw an
          error, which should be caught by the ErrorBoundary.
        </p>
      </div>
    </div>
  );
};

export default TestError;
