import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ContactDetails from "../component/ContactDetails"
import Samples from "../component/Samples"

export const routeradmin = createBrowserRouter([

    {
        path: "/",
        element : <App/>,
        children : [

            {
                path : "contactDetails",
                element : <ContactDetails/>
            },
            {
                path : "samples",
                element : <Samples/>
            },
        ]
    }


])