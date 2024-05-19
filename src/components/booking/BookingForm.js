import { useState } from 'react';
import '../../styles/Booking.css';

const BookingForm = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [date, setDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleFnameChange = (e) => {
        setFname(e.target.value);
    };

    const handleLnameChange = (e) => {
        setLname(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(Number(e.target.value));
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form>
            <label htmlFor="res-fname">First name </label>
            <input
                id="res-fname"
                type="text"
                value={fname}
                onChange={handleFnameChange}
            />
            <br />

            <label htmlFor="res-lname">Last name </label>
            <input
                id="res-lname"
                type="text"
                value={lname}
                onChange={handleLnameChange}
            />
            <br />

            <label htmlFor="res-date">Date </label>
            <input
                id="res-date"
                type="date"
                value={date}
                onChange={handleDateChange}
            />
            <br />

            <label htmlFor="res-time">Time </label>
            <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
            >
                {availableTimes.map((time) => {
                    return(
                        <option>{time}</option>
                    );
                })}
            </select>
            <br />

            <label htmlFor="res-guests">Number of guests </label>
            <input
                id="res-guests"
                type="range"
                min="1"
                max="10"
                value={guests}
                onChange={handleGuestsChange}
            />
            <br />

            <label htmlFor="res-occasion">Occasion </label>
            <select
                id="res-occasion"
                value={occasion}
                onChange={handleOccasionChange}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <br />

            <button type="submit" onSubmit={handleSubmit}>
                Make your reservation
            </button>
        </form>
    );
};

export default BookingForm;