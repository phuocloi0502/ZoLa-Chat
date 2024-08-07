import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../page/home/Home";
import { Chat } from "../page/chat/Chat";
import { Friends } from "../page/friends/Friends";
import { MyPage } from "../page/my_page/MyPage";
const baseURL = "/ZoLa-Chat";
const router = createBrowserRouter([
  {
    path: "/ZoLa-Chat/",
    element: <App />,
    children: [
      {
        path: `${baseURL}/chat`,
        element: <Chat />,
      },
      {
        path: `${baseURL}/friends`,
        element: <Friends />,
      },
      {
        path: `${baseURL}/my_page`,
        element: <MyPage />,
      },
    ],
  },
]);
export default router;
