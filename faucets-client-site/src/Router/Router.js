import { createBrowserRouter } from "react-router-dom";
import ETHTransectionHistory from "../components/ETHTransectionHistory/ETHTransectionHistory";
import TestlinkTransectionHistory from "../components/TestlinkTransactionHistory/TestlinkTransectionHistory";
import Main from "../Layout/Main";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {path:'/',element:<ETHTransectionHistory></ETHTransectionHistory>},
          {path:'/eth',element: <ETHTransectionHistory></ETHTransectionHistory>},
          {path:'/testlink',element: <TestlinkTransectionHistory></TestlinkTransectionHistory>},
        ]
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },

    ]
  }
])