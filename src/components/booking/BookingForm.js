import { useState, useEffect } from 'react';
import '../../styles/Booking.css';

const BookingForm = ({ availableTimes, dispatch }) => {
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

    const formatDate = date => {
        // Break date up
        const day = date.getDate();
        const month = date.getMonth() + 1; // Add 1 because getMonth() uses a 0-based array (e.g., Jan -> 0th month)
        const year = date.getFullYear();

        // Format date (HTML date input understands format YYYY-MM-DD)
        const formattedDate = `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        return formattedDate;
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

        setFormData({
            ...formData,
            guests: 4,
            date: formatDate(currentDate)
        });
    }, [formSubmitted]);

    return (
        <form onSubmit={handleSubmit} data-testid="res-form">
            <label htmlFor="res-fname" id="fnameLabel">First name </label>
            <input
                name="fname"
                id="res-fname"
                type="text"
                aria-labelledby="fnameLabel"
                aria-required="true"
                value={formData.fname}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-lname" id="lnameLabel">Last name </label>
            <input
                name="lname"
                id="res-lname"
                type="text"
                aria-labelledby="lnameLabel"
                aria-required="true"
                value={formData.lname}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-date" id="reservationDate">Date </label>
            <input
                name="date"
                id="res-date"
                type="date"
                aria-labelledby="reservationDate"
                aria-required="true"
                value={formData.date}
                onChange={(e) => {
                    handleChange(e);
                    dispatch({ payload: { date: e.target.value } });
                }}
            />
            <br />

            <label htmlFor="res-time" id="reservationTime">Time </label>
            <select
                name="time"
                id="res-time"
                aria-labelledby="reservationTime"
                aria-required="true"
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

            <label htmlFor="res-guests" id="numGuests">Number of guests ({formData.guests})</label>
            <br />
            <input
                name="guests"
                id="res-guests"
                type="range"
                min="1"
                max="10"
                aria-labelledby="numGuests"
                aria-required="true"
                value={formData.guests}
                onChange={handleChange}
            />
            <br />

            <label htmlFor="res-occasion" id="occasion">Occasion </label>
            <select
                name="occasion"
                id="res-occasion"
                aria-labelledby="occasion"
                aria-required="true"
                value={formData.occasion}
                onChange={handleChange}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <br />

            <button
                type="submit"
                aria-label="Make your reservation"
            >
                Make your reservation
            </button>
        </form>
    );
};

export default BookingForm;