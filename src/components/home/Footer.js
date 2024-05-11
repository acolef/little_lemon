import '../../styles/Footer.css';
import restaurant from '../../assets/restaurant.jpg';
import { Link } from 'react-router-dom';
import { links } from '../Nav';

const socialmedia = ["Facebook", "Pinterest", "X"];

const Footer = () => {
    return (
        <footer className="page-section footer-section">
            <div className="footer-elements content-wrapper">
                <div className="footer-img">
                    <img
                        className="footer-pic"
                        src={restaurant}
                        alt="An indoor photograph of the Little Lemon restaurant"
                    />
                </div>
                <div className="footer-links">
                    <div className="footer-links-section">
                        <section>
                            <nav role="navigation">
                                <ul>
                                    {links.map((data, i) => {
                                        return (
                                            <li key={i}>
                                                <Link to={data.url}>
                                                    {data.info}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
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
                                                <a
                                                    href={`https://www.${data}.com`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
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
            <div className="copyright-container">
                <p className="copyright">
                    Copyright ⓒ Little Lemon
                </p>
            </div>
        </footer>
    );
};

export default Footer;