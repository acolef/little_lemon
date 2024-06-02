import '../../styles/Booking.css';
import pasta from '../../assets/pasta.jpg';

const ConfirmedBooking = () => {
    return (
        <section className="page-section confirm-booking">
            <div className="confirm-booking-elements content-wrapper">
                <div className="confirm-text">
                    <div className="confirm-bg">
                        <h3>Booking confirmed!</h3>
                    </div>
                    <div>
                        <p className="confirm-msg">
                            Thank you for choosing Little Lemon for your reservation. We look
                            forward to your visit!
                        </p>
                    </div>
                </div>
                <div className="confirm-img">
                    <img src={pasta} alt="A plate of penne pasta with tomato sauce" />
                </div>
            </div>
        </section>
    );
};

export default ConfirmedBooking;