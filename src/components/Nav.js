import '../styles/Nav.css';
import logo from '../assets/Logo.png';

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

const Navbar = () => {
    return (
        <header>
            <nav className="navbar" role="navigation">
                <div className="nav-elements">
                    <img
                        src={logo}
                        alt="Little Lemon restaurant logo"
                    />
                    <ul className="nav-links">
                        {links.map((data, i) => {
                            return (
                                <li key={i}>
                                    <a href={data.url}>
                                        {data.info}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

const Nav = () => {
    return (
        <Navbar />
    );
};

export default Nav;