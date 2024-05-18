import BookingForm from './BookingForm';
import '../../styles/Booking.css';
import pasta from '../../assets/pasta.jpg';

const Booking = () => {
    return (
        <section className="page-section booking">
            <div className="booking-elements content-wrapper">
                <div>
                    <h2>Reserve a table</h2>
                </div>
                <div className="booking-form">
                    <BookingForm />
                </div>
            </div>
        </section>
    );
};

export default Booking;