import { LINKS } from "./appLinks";
import Home from "../views/Home/Home";
import EBook from "../views/E-Books/EBook";
import { createBrowserRouter } from "react-router-dom";

//-----------------------------------------------------------------------

export const router = createBrowserRouter([
    {
      path: LINKS.home,
      element: <Home />,
      children: [
        {
          path: LINKS.e_book,
          element: <EBook />,
        },
      ],
    },
  ]);
  