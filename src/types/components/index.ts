import { type ReactNode, type FC } from "react";
import { type FallbackProps } from "react-error-boundary";

interface ContentsProps {
  children: ReactNode;
}

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: FC<FallbackProps>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  onReset?: () => void;
}

export type { ContentsProps, SuspenseWrapperProps, ErrorBoundaryProps };
