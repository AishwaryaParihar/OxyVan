
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactDetails from "../component/ContactDetails";
import Samples from "../component/Samples";
import SinghIn from "../pages/SinghIn";
import SideBar from "../component/SideBar";
import ContactForm from "../component/ContactForm";
import UserRecord from "../component/UserRecord";
import UserRecordForm from "../component/UserRecordForm";
import VolunteerDetails from "../component/VolunteerDetails";
<<<<<<< HEAD
import Dashboard from "../component/Dashboard/Dashboard";
import TotalTrees from "../component/Dashboard/TotalTrees";
=======
import Register from "../component/Register";
>>>>>>> 45ab22a289d9beea6b71c6c4ecca5d294c9b4fdd


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
            {
              path: "volunteer",
              element: <VolunteerDetails />,
            },
            {
              path: "userRecord",
              element: <UserRecord/>,
            },
            {
              path: "userRecordForm",
              element: <UserRecordForm/>,
            },
            {
              path: "dashboard",
              element: <Dashboard/>,
              children:[
                {
                  path:'totaltrees',
                  element:<TotalTrees/>
                }
              ]
            },
            {
              path: "register",
              element: <Register/>,
            },
          ],
        },
      ],
    },
  ]);
  