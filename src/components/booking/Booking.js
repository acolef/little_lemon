import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../../styles/Booking.css';
import { fetchAPI, submitAPI } from '../../api';

// Reducer function - changes available reservation times based on selected date
const updateTimes = (_, action) => {
    const newDate = new Date(action.payload.date);

    return (
        fetchAPI(newDate)
    );
};

const initializeTimes = () => {
    const today = new Date();

    return (
        fetchAPI(today)
    );
};

const Booking = () => {
    // Must call initializeTimes() as a function so it returns initial state
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData))
            navigate("/booking/confirm");
    };

    return (
        <section className="page-section booking">
            <div className="booking-elements content-wrapper">
                <div>
                    <h2>Reserve a table</h2>
                </div>
                <div>
                    <p className="required">
                        <span className="asterisk">*</span> indicates a required field
                    </p>
                </div>
                <div className="booking-form">
                    <BookingForm
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitForm}
                    />
                </div>
            </div>
        </section>
    );
};

export default Booking;
export { initializeTimes, updateTimes };