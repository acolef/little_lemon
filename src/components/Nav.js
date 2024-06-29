import '../styles/Nav.css';
import logo from '../assets/Logo.png';
import hmenu from '../assets/hamburger-menu.png';
import closemenu from '../assets/close.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export const links = [
    {
        info: "Home",
        url: "/",
    },
    {
        info: "About",
        url: "/about",
    },
    {
        info: "Menu",
        url: "#",
    },
    {
        info: "Reservations",
        url: "/booking",
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

const linksList = links.map((data, i) => {
    return (
        <li key={i}>
            <Link to={data.url}>
                {data.info}
            </Link>
        </li>
    );
});

const Navbar = () => {
    // Tracks if hamburger menu has been opened
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    // Refs for getting element sizes
    const menuRef = useRef(null);
    const headerRef = useRef(null);

    // Dynamically calculates header height
    const getHeaderHeight = () => {
        if (headerRef.current)
            return `${headerRef.current.offsetHeight}px`;
        return 0;
    };

    // Dynamically calculates menu width
    const getMenuWidth = () => {
        if (menuRef.current)
            return menuRef.current.offsetWidth;
        return 0;
    };

    // Ensures right side of menu aligns with right side of page
    const getMenuHorizontalPosition = () => {
        return isMenuOpen ? "0" : `calc(-${getMenuWidth()}px - 2px)`; // subtract 2px to account for rounding discrepancies and/or subpixel rendering
    };

    // Positions menu
    useEffect(() => {
        const menuHorizontalPosition = getMenuHorizontalPosition();
        const menuVerticalPosition = getHeaderHeight();

        if (menuRef.current) {
            menuRef.current.style.top = menuVerticalPosition;
            menuRef.current.style.right = menuHorizontalPosition;
        };
    }, [isMenuOpen]);

    // Toggles menu upon clicking hamburger icon
    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevents window from closing menu due to bubbling
        setIsMenuOpen(!isMenuOpen);
    };

    // Closes menu when user clicks outside of it
    useEffect(() => {
        const handleClick = (e) => {
            if (menuRef.current && menuRef.current.contains(e.target))
                return; // do nothing if click is inside menu

            setIsMenuOpen(false); // close menu otherwise
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header ref={headerRef}>
            <nav className="navbar" role="navigation">
                <div className="nav-elements">
                    <img
                        src={logo}
                        alt="Little Lemon restaurant logo"
                    />
                    <ul className="nav-links">
                        {linksList}
                    </ul>
                    <button className="hamburger" onClick={toggleMenu}>
                        <img
                            src={isMenuOpen ? closemenu : hmenu}
                            height="35"
                            width="35"
                        />
                    </button>
                </div>
                <div
                    ref={menuRef}
                    className={`hamburger-menu ${isMenuOpen === null ? "hidden" : isMenuOpen ? "open" : ""}`} // Prevent menu from flickering/appearing on initial page load
                >
                    <ul>
                        {linksList}
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