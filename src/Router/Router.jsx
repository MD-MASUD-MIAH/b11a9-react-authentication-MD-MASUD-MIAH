import { createBrowserRouter } from "react-router";
import Root from "../page/Root";
import Home from "../commnents/Home";


import Logingpages from "../page/Logingpages";
import Login from "../commnents/Login";
import NewAccount from "../commnents/NewAccount";
import Forget from "../commnents/Forget";
import PrivateRoute from "../Contexts/PrivateRoute";
import DetailsCard from "../commnents/detailsCard";
import Loader from "../commnents/Loader";
import ErrorPage from "../commnents/Errorpage";
import ExraRoute from "../commnents/ExraRoute";
import MyProfile from "../commnents/MyProfile";
import Event from "../commnents/Event";


export const router = createBrowserRouter([


    {path:'/', Component:Root, 

        errorElement:<ErrorPage></ErrorPage>,

        children:[
  {index:true ,
    
    loader:()=>fetch('/event.json'),
    hydrateFallbackElement:<Loader></Loader>,
    Component:Home}

        ]
    },

   

    {
        path:'/details/:id',
        loader:()=>fetch('/event.json'),
         element:<PrivateRoute> <DetailsCard></DetailsCard>  </PrivateRoute>,
         errorElement:<ErrorPage></ErrorPage>,
         hydrateFallbackElement:<Loader></Loader>
    },
    
    {

        path:'/loginpages' ,Component:Logingpages,
            errorElement:<ErrorPage></ErrorPage>,
        children:[

            {path:'/loginpages/login', Component:Login}, 

            {path:'/loginpages/new', Component:NewAccount},
            {path:'/loginpages/forget', Component:Forget},
            {path:"/loginpages/faq", Component:ExraRoute} , 
            {path:'/loginpages/profile',element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>} ,
            {path: '/loginpages/event',element:<PrivateRoute><Event></Event></PrivateRoute>}
        ]
    }

 

    


])