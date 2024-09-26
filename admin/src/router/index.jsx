
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
import Dashboard from "../component/Dashboard/Dashboard";
import TotalTrees from "../component/Dashboard/TotalTrees";
import Register from "../component/Register";
import TreeCategory from "../component/TreeCategory";


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
<<<<<<< HEAD
              path: "tree-category",
              element: <TreeCategory />,
=======
              path: "dashboard",
              element: <Dashboard/>,
              children:[
                {
                  path:'totaltrees',
                  element:<TotalTrees/>
                }
              ]
>>>>>>> 1f8849619fcc0ef9b56e33f0b44c3cffba51bad2
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
  