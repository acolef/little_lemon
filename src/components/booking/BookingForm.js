import { useState, useEffect } from 'react';
import '../../styles/Booking.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        date: "",
        time: "",
        guests: 4,
        occasion: "Select an occasion",
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        submitForm(formData);
    };

    const currentDate = new Date();

    const formatDate = date => {
        // Break date up
        const day = date.getDate();
        const month = date.getMonth() + 1; // Add 1 because getMonth() uses a 0-based array (e.g., Jan -> 0th month)
        const year = date.getFullYear();

        // Format date (HTML date input understands format YYYY-MM-DD)
        const formattedDate = `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        return formattedDate;
    };

    // Formats times for easy comparison
    const formatTime = date => {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedTime = `${hours}.${minutes}`;

        return Number(formattedTime);
    };

    // Formats availableTimes for easy comparison
    const formatAvailableTime = time => {
        // Gets all characters before the colon in available time of format hh:mm
        const hours = time.substring(0, time.indexOf(':'));
        // Gets all characters after the colon in available time
        const minutes = time.substring(time.indexOf(':') + 1); // + 1 is needed to skip colon's string index

        const formattedAvailableTime = `${hours}.${minutes}`;

        return Number(formattedAvailableTime);
    };

    /* Takes current date, formats it, and passes it to stateful date variable
     * Also ensures that initial guest amount displays on page load
     */
    useEffect(() => {
        setFormData({
            ...formData,
            guests: 4,
            date: formatDate(currentDate),
        });
    }, []);

    return (
        <form onSubmit={handleSubmit} data-testid="res-form">
            <label htmlFor="res-fname" id="fnameLabel">
                First name<span className="asterisk">*</span>
            </label>
            <br />
            <input
                name="fname"
                id="res-fname"
                type="text"
                aria-labelledby="fnameLabel"
                aria-required="true"
                value={formData.fname}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="res-lname" id="lnameLabel">
                Last name<span className="asterisk">*</span>
            </label>
            <br />
            <input
                name="lname"
                id="res-lname"
                type="text"
                aria-labelledby="lnameLabel"
                aria-required="true"
                value={formData.lname}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="res-date" id="reservationDate">
                Date<span className="asterisk">*</span>
            </label>
            <br />
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
                min={formatDate(currentDate)}
            />
            <br />

            <label htmlFor="res-time" id="reservationTime">
                Time<span className="asterisk">*</span>
            </label>
            <br />
            <select
                name="time"
                id="res-time"
                aria-labelledby="reservationTime"
                aria-required="true"
                value={formData.time}
                onChange={handleChange}
                required
            >
                {availableTimes.map((time, i) => {
                    return (
                        <option
                            key={i}
                            disabled=
                                {
                                    formatAvailableTime(time) < formatTime(currentDate)
                                }
                        >
                            {time}
                        </option>
                    );
                })}
            </select>
            <br />

            <label htmlFor="res-guests" id="numGuests">
                Number of guests<span className="asterisk">*</span> ({formData.guests})
            </label>
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

            <label htmlFor="res-occasion" id="occasion">
                Occasion<span className="asterisk">*</span>
            </label>
            <br />
            <select
                name="occasion"
                id="res-occasion"
                aria-labelledby="occasion"
                aria-required="true"
                value={formData.occasion}
                onChange={handleChange}
                required
            >
                <option disabled>Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <br />

            <br />
            <button
                type="submit"
                aria-label="Make your reservation"
                disabled=
                    {
                        !formData.fname ||
                        !formData.lname ||
                        formData.occasion == "Select an occasion"
                    }
            >
                Make your reservation
            </button>
        </form>
    );
};

export default BookingForm;