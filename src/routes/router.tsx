import { lazy } from "react";
import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { HomeLayout, AuthLayout } from "@/layouts";
import { SuspenseWrapper } from "@/components";

// Lazy load pages for better performance
const HomePage = lazy(() =>
  import("@/pages/Home/HomePage").then((m) => ({ default: m.HomePage }))
);
const MoviesPage = lazy(() =>
  import("@/pages/Movies/MoviesPage").then((m) => ({ default: m.MoviesPage }))
);
const MovieDetailPage = lazy(() =>
  import("@/pages/Movies/MovieDetailPage").then((m) => ({
    default: m.MovieDetailPage,
  }))
);
const CinemasPage = lazy(() =>
  import("@/pages/Cinemas/CinemasPage").then((m) => ({
    default: m.CinemasPage,
  }))
);
const CinemaDetailPage = lazy(() =>
  import("@/pages/Cinemas/CinemaDetailPage").then((m) => ({
    default: m.CinemaDetailPage,
  }))
);
const BookingPage = lazy(() =>
  import("@/pages/Booking/BookingPage").then((m) => ({
    default: m.BookingPage,
  }))
);
const ProfilePage = lazy(() =>
  import("@/pages/Profile/ProfilePage").then((m) => ({
    default: m.ProfilePage,
  }))
);
const LoginPage = lazy(() =>
  import("@/pages/Auth/LoginPage").then((m) => ({ default: m.LoginPage }))
);
const RegisterPage = lazy(() =>
  import("@/pages/Auth/RegisterPage").then((m) => ({ default: m.RegisterPage }))
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFound/NotFoundPage").then((m) => ({
    default: m.NotFoundPage,
  }))
);
const TestErrorPage = lazy(() =>
  import("@/components/TestError/TestError").then((m) => ({
    default: m.default,
  }))
);
const NewsPage = lazy(() =>
  import("@/pages/News/NewsPage").then((m) => ({
    default: m.default,
  }))
);
const ContactPage = lazy(() =>
  import("@/pages/Contact/ContactPage").then((m) => ({
    default: m.default,
  }))
);

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// Index route - home page with HomeLayout
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Movies routes
const moviesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/movies",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <MoviesPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

const movieDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/movies/$movieId",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <MovieDetailPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Cinemas routes
const cinemasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cinemas",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <CinemasPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

const cinemaDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cinemas/$cinemaId",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <CinemaDetailPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Booking route
const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <BookingPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Profile route
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <ProfilePage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// News route
const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <NewsPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Contact route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <ContactPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Test Error route
const testErrorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/test-error",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <TestErrorPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Auth routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/login",
  component: () => (
    <AuthLayout>
      <SuspenseWrapper>
        <LoginPage />
      </SuspenseWrapper>
    </AuthLayout>
  ),
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/register",
  component: () => (
    <AuthLayout>
      <SuspenseWrapper>
        <RegisterPage />
      </SuspenseWrapper>
    </AuthLayout>
  ),
});

// 404 route
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => (
    <HomeLayout>
      <SuspenseWrapper>
        <NotFoundPage />
      </SuspenseWrapper>
    </HomeLayout>
  ),
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  moviesRoute,
  movieDetailRoute,
  cinemasRoute,
  cinemaDetailRoute,
  bookingRoute,
  profileRoute,
  newsRoute,
  contactRoute,
  testErrorRoute,
  loginRoute,
  registerRoute,
  notFoundRoute,
]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
