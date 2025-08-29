// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import AllMassages from './pages/AllMassages'
// import RoomDetails from './pages/RoomDetails'
// import MyBookings from './pages/MyBookings'
// import HotelReg from './components/HotelReg'

// import AdminLayout from "./pages/admin/AdminLayout";
// import Dashboard from "./pages/admin/Dashboard";
// import Users from "./pages/admin/Users";
// import Bookings from "./pages/admin/Bookings";

// const App = () => {

//     const isOwnerPath = useLocation().pathname.includes("owner")
//     const isAdminPath = useLocation().pathname.includes("admin");


//   return (
//     <div>
//        {!isOwnerPath && <Navbar/>}
//        <false HotelReg/>
//        <div className='min-h-[70vh]'>
//         <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/rooms' element={<AllMassages/>} />
//             <Route path='/rooms/:id' element={<RoomDetails/>} />
//             <Route path='/my-bookings' element={<MyBookings/>} />
//         </Routes>

//        </div>
//        <Footer/>
//     </div>
//   )
// }

// export default App

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllMassages from "./pages/AllMassages";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Bookings from "./pages/admin/Bookings";
import About from "./components/About";
import Testimonial from './components/Testimonial' 

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const isAdminPath = useLocation().pathname.includes("admin");


  return (
    <div>
      {/* Only show User Navbar + Footer if not admin */}
      {!isOwnerPath && !isAdminPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllMassages />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonial />}/>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />   {/* /admin/dashboard */}
            <Route path="users" element={<Users />} />           {/* /admin/users */}
            <Route path="bookings" element={<Bookings />} />     {/* /admin/bookings */}
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && !isAdminPath && <Footer />}
    </div>
  );
};

export default App;
