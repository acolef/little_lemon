import { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import '../../styles/Booking.css';
import pasta from '../../assets/pasta.jpg';

const Booking = () => {
    const updateTimes = (state, date) => {
        switch (date) {
            default:
                return (
                    { times: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] }
                );
        }
    };

    const initializeTimes = () => {
        return (
            { times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] }
        );
    };

    // Note: must call initializeTimes() as a function so it returns initial state
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <section className="page-section booking">
            <div className="booking-elements content-wrapper">
                <div>
                    <h2>Reserve a table</h2>
                </div>
                <div className="booking-form">
                    <BookingForm
                        availableTimes={availableTimes.times}
                        dispatch={dispatch}
                    />
                </div>
            </div>
        </section>
    );
};

export default Booking;