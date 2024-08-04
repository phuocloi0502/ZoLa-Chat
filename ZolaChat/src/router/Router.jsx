import { createBrowserRouter } from "react-router-dom";
import { Login } from "../page/log_in/Login";
import { SignUp } from "../page/sign_up/SignUp";
import App from "../App";
import { Home } from "../page/home/Home";
const baseURL = "/ZoLa-Chat";
const router = createBrowserRouter([
  {
    path: "/ZoLa-Chat/",
    element: <App />,
    children: [{}],
  },
]);
export default router;
