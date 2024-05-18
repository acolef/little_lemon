import { useState } from 'react';
import '../../styles/Booking.css';

const BookingForm = () => {
    return (
        <form>
            <label htmlFor="res-fname">First name </label>
            <input id="res-fname" type="text" />
            <br />

            <label htmlFor="res-lname">Last name </label>
            <input id="res-lname" type="text" />
            <br />

            <label htmlFor="res-date">Date </label>
            <input id="res-date" type="date" />
            <br />

            <label htmlFor="res-time">Time </label>
            <select id="res-time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <br />

            <label htmlFor="res-guests">Number of guests </label>
            <input
                id="res-guests"
                type="range"
                min="1"
                max="10"
            />
            <br />

            <label htmlFor="res-occasion">Occasion </label>
            <select id="res-occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <br />

            <input type="submit" value="Make your reservation" />
        </form>
    );
};

export default BookingForm;