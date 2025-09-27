import { type FC, type JSX, Suspense } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router";
import { RootLoading, ErrorBoundary } from "@/components";

const App: FC = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<RootLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
