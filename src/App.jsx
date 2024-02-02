import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode.context";
import { AuthContext } from "./context/auth.context";


function App() {

  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode)

  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style = {{display: "flex"}}>
      <LeftBar />
      <div style={{flex: 6}}>
      <Outlet />
      </div>
      <RightBar />
      </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(currentUser){
      return children
    }
    return <Navigate to="/login" />
  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
      <Layout />
      </ProtectedRoute>,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
