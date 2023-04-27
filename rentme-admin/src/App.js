import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Cars from './components/Cars';
import InsertCar from './components/InsertCar'
import DeleteUser from './components/DeleteUser';
import SeeBookings from './components/SeeBookings';
import DeleteCar from './components/DeleteCar';
import CancelBooking from './components/CancelBooking';
import RcvPayments from './components/RcvPayments';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home key='cars' link="car/cars"/>} />

        <Route exact path='/insertcar' element={<InsertCar key='insertCar' link="car/insertcar" />}/>

        <Route exact path='/rcvpayment' element={<RcvPayments key='rcvPayments' link="emp/payment" />}/>

        <Route exact path='/deleteuser' element={<DeleteUser key="deleteUser" link="emp/deleteuser"/>} />

        <Route exact path='/deletecar' element={<DeleteCar key="deleteUser" link="emp/deleteuser"/>} />

        <Route exact path='/bookings' element={<SeeBookings key="bookings" link="car/bookings"/>} />

        <Route exact path='/cancelbooking' element={<CancelBooking key="cancelBooking" link="emp/cancelbooking"/>}/>

        <Route exact path='/cityKarachi' element={<Cars key='/cityKarachi' city="Karachi" link="car/city" city_id={1}/>}/>
        <Route exact path='/cityLahore' element={<Cars key='/cityLahore' city="Lahore" link="car/city" city_id={2}/>}/>
        <Route exact path='/cityGujranwala' element={<Cars key='/cityGujranwala' city="Gujranwala" link="car/city" city_id={3}/>}/>
        <Route exact path='/cityPeshawar' element={<Cars key='/cityPeshawar' city="Peshawar" link="car/city" city_id={4}/>}/>

        <Route path="/emp/login" element={<Login />} />
        <Route path="/emp/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
