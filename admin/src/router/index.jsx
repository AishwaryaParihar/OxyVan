import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactDetails from "../component/ContactDetails";
import Samples from "../component/Samples";
import SinghIn from "../pages/SinghIn";
import SideBar from "../component/SideBar";
import ContactForm from "../component/ContactForm";


export const routeradmin = createBrowserRouter([
    {
      path: "/",
      element: <App  />,
      children: [
        // {
        //   path: "",
        //   element: <SinghIn />,
        // },
        {
          path: "",
          element: <SideBar />,
          children: [
            {
              path: "contactForm",
              element: <ContactForm />,
            },
            {
              path: "samples",
              element: <Samples />,
            },
          ],
        },
      ],
    },
  ]);
  