import { type ReactNode, type FC } from "react";
import { type FallbackProps } from "react-error-boundary";

// Layout Props
interface HomeLayoutProps {
  children?: ReactNode;
}

interface AuthLayoutProps {
  children?: ReactNode;
}

// Component Props
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

// Page Props (if needed)
interface PageProps {
  children?: ReactNode;
}

export type {
  HomeLayoutProps,
  AuthLayoutProps,
  ContentsProps,
  SuspenseWrapperProps,
  ErrorBoundaryProps,
  PageProps,
};
