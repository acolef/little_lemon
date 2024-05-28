import '../styles/Nav.css';
import logo from '../assets/Logo.png';
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
            return headerRef.current.offsetHeight;
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
            menuRef.current.style.top = `${menuVerticalPosition}px`;
            menuRef.current.style.right = menuHorizontalPosition;
        }
    }, [isMenuOpen]);

    // Toggles menu upon clicking hamburger icon
    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevents window from closing menu due to bubbling
        setIsMenuOpen(!isMenuOpen);
    };

    // Closes menu when user clicks outside of it
    useEffect(() => {
        const handleClick = (e) => {
            // Represents open hamburger menu
            const hamburgerMenu = document.querySelector(".hamburger-menu.open");

            let clickLocation = e.target;

            do {
                if (clickLocation == hamburgerMenu)
                    return; // do nothing if click is anywhere inside menu
                clickLocation = clickLocation.parentNode;
            } while (clickLocation); // loop through parent elements of target

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
                        <svg
                            width="35"
                            height="25"
                            viewBox="0 0 35 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z"
                                fill="black"
                            />
                        </svg>
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