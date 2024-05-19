import { useState, useEffect } from 'react';
import '../../styles/Booking.css';

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        date: "",
        time: availableTimes[0],
        guests: 4,
        occasion: "Birthday",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset fields
        setFormData({
            fname: "",
            lname: "",
            date: "",
            time: availableTimes[0],
            guests: 4,
            occasion: "Birthday",
        });

        setFormSubmitted(true);
    };

    /* Gets current date, formats it, and passes it to stateful date variable
     * Also ensures that initial guest amount displays on page load
     * formSubmitted dependency ensures date input is repopulated with current date
     * upon form submission
     */
    useEffect(() => {
        // Reset formSubmitted to false
        setFormSubmitted(false);

        // Get current date
        const currentDate = new Date();

        // Break date up
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1; // Add 1 because getMonth() uses a 0-based array (i.e., Jan -> 0th month)
        const currentYear = currentDate.getFullYear();

        // Format date to initialize stateful date variable
        // (HTML date input understands format YYYY-MM-DD)
        const formattedDate = `${currentYear.toString()}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;

        setFormData({ guests: 4, date: formattedDate });
    }, [formSubmitted]);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-fname">First name </label>
            <input
                name="fname"
                id="res-fname"
                type="text"
                value={formData.fname}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-lname">Last name </label>
            <input
                name="lname"
                id="res-lname"
                type="text"
                value={formData.lname}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-date">Date </label>
            <input
                name="date"
                id="res-date"
                type="date"
                value={formData.date}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-time">Time </label>
            <select
                name="time"
                id="res-time"
                value={formData.time}
                onChange={handleChange}
            >
                {availableTimes.map((time, i) => {
                    return (
                        <option key={i}>{time}</option>
                    );
                })}
            </select>
            <br />

            <label htmlFor="res-guests">Number of guests ({formData.guests})</label>
            <br />
            <input
                name="guests"
                id="res-guests"
                type="range"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-occasion">Occasion </label>
            <select
                name="occasion"
                id="res-occasion"
                value={formData.occasion}
                onChange={handleChange}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <br />

            <button type="submit">
                Make your reservation
            </button>
        </form>
    );
};

export default BookingForm;