import Register from "./pages/register/register";
import Login from "./pages/login/login";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
function App() {
    const router = createBrowserRouter([
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]);

    return(
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App;