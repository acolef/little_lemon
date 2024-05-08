import { Route, Routes } from 'react-router-dom';
import Homepage from './home/Homepage';
import About from './home/About';
import Booking from './booking/Booking';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
    );
};

export default Routing;