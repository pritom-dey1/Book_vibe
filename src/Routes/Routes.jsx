import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ListedBook from "../Pages/ListedBook/ListedBook";
import WishList from "../components/ListedPageComponent/WishList";
import ReadBooks from "../components/ListedPageComponent/ReadBooks";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        element: <Home></Home>,
      },
      {
        path: "cardDetails/:bookId",
        loader: () => fetch("/booksData.json"),

        element: <CardDetails></CardDetails>,
      },
      {
        path: "listed_book",
        element: <ListedBook></ListedBook>,
        children: [
          {
            index: true, 
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "Read-books",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "Wishlist",
            element: <WishList></WishList>,
          },
        ],
      },
    ],
  },
]);
