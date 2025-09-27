import { type FC, type JSX, Suspense } from "react";
import { PageLoading, ErrorBoundary } from "@/components";
import { type SuspenseWrapperProps } from "@/types/components";

// Suspense wrapper with error boundary using react-error-boundary
const SuspenseWrapper: FC<SuspenseWrapperProps> = ({
  children,
  fallback,
}): JSX.Element => {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback || <PageLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWrapper;
