import "../scss/styles.scss";

import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App"
import Item from "./components/itemPage";
import Cart from "./components/cart";

const router = createBrowserRouter([
   {
      path: "*",
      element: <App />,
      children: [
         {
            path: "items/:name",
            element: <Item />,
            loader: async ({ params }) => {
               return (`/items/${params.name}`)
            }
         }, 
         {
            path: "cart",
            element: <Cart />
         }
      ]
   }
])


ReactDOM.createRoot(document.getElementById("root")).render(

   <RouterProvider
      router={router}
      fallbackElement={"spinner here"}
      />
)

// root.render(
   // <React.StrictMode>
   //    <App />
   // </React.StrictMode>
// )