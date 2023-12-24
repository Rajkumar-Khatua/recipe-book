// App.jsx
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    const location = useLocation();

    // Check if the current route is login or register
    const isLoginOrRegister =
      location.pathname.includes("login") ||
      location.pathname.includes("register");

    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          {!isLoginOrRegister && window.innerWidth <= 824 ? (
            <MobileMenu />
          ) : (
            <Navbar />
          )}
          <Outlet />
          {!isLoginOrRegister && <Footer />}
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/recipe/:id",
          element:<RecipeDetailPage/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
