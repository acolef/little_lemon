import '../styles/Footer.css';
import restaurant from '../assets/restaurant.jpg';

const links = [
    {
        info: "Home",
        url: "#",
    },
    {
        info: "About",
        url: "#",
    },
    {
        info: "Menu",
        url: "#",
    },
    {
        info: "Reservations",
        url: "#",
    },
    {
        info: "Order Online",
        url: "#",
    },
    {
        info: "Login",
        url: "#",
    },
];

const socialmedia = ["Facebook", "Pinterest", "X"];

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-elements content-wrapper">
                <img
                    className="footer-img"
                    src={restaurant}
                    alt="An indoor photograph of the Little Lemon restaurant"
                />
                <div className="footer-links">
                    <div className="footer-links-section">
                        <section>
                            <ul>
                                <nav role="navigation">
                                    {links.map((data, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={data.url}>
                                                    {data.info}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </nav>
                            </ul>
                        </section>
                    </div>

                    <div className="footer-links-section">
                        <section>
                            <h4>Contact</h4>
                            <ul>
                                <li>
                                    <a href="#">
                                        Address
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Phone
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="footer-links-section">
                        <section>
                            <h4>Social Media</h4>
                                <ul>
                                    {socialmedia.map((data, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={`https://www.${data}.com`}>
                                                    {data}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                        </section>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;