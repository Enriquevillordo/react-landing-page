import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import { PATH } from "../constants/paths";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

// export default function Routes() {
//     return (
//         <BrowserRouter >
        
//         </BrowserRouter>
//     )
// }

const Routes = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <MainLayout />,
        children: [
            {
              path: PATH.HOME,
              element: <Home />,
            },
          ],
    },

]);

export default Routes