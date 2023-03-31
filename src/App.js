import Register from "./pages/register/register";
import Login from "./pages/login/login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/RightBar";
import Leftbar from "./components/leftbar/LeftBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import { Search } from "@mui/icons-material";
import './style.scss';
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";


function App() {
  const { currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark': 'light'}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
