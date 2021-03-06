
import Layout from "../components/layout/index";
import Home from "../pages/LandingPage"
import Booking from '../pages/BookingPage'
import LongStays from "../pages/LongStaysPage";
export const homeRoute = [

    {
        path : '/' , 
        exact : true , 
        layout : Layout , 
        component: Home,
    },
    {
      path : '/booking' , 
      exact : true , 
      layout : Layout , 
      component: Booking,
  },
  {
    path:'/longstays',
    exact:true,
    layout:Layout,
    component:LongStays
  }
    
]



export const mainRoute = [ ...homeRoute ]