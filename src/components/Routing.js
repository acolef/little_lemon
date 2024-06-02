import { Route, Routes } from 'react-router-dom';
import Homepage from './home/Homepage';
import About from './home/About';
import Booking from './booking/Booking';
import ConfirmedBooking from './booking/ConfirmedBooking';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/confirm" element={<ConfirmedBooking />} />
        </Routes>
    );
};

export default Routing;