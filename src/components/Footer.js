import '../styles/Footer.css';
import restaurant from '../assets/restaurant.jpg';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-elements content-wrapper">
                <img
                    src={restaurant}
                    alt="An indoor photograph of the Little Lemon restaurant"
                />
                <div className="footer-links">
                    <div className="footer-links-section">
                        <section>
                            <nav role="navigation">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="menu.html">Menu</a>
                                    </li>
                                    <li>
                                        <a href="reservations.html">Reservations</a>
                                    </li>
                                    <li>
                                        <a href="online-ordering.html">Order Online</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>

                    <div className="footer-links-section">
                        <section>
                            <h4>Contact</h4>
                            <article>
                                <p>Address</p>
                                <p>Phone</p>
                                <p>Email</p>
                            </article>
                        </section>
                    </div>

                    <div className="footer-links-section">
                        <section>
                            <h4>Social Media</h4>
                            <article>
                                <p>Social media links here</p>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;