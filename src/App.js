import Register from "./pages/register/register";
import Login from "./pages/login/login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";
import Leftbar from "./components/leftbar/leftbar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
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
            path: "/profile/:id",
            element: <Profile />,
        }
        ]
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
