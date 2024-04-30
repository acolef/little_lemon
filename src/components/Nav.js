const Nav = () => {
    return (
        <nav>
            <img
                src="assets/Logo.svg"
                alt="Little Lemon restaurant logo"
                width="202"
                height="61"
            />
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
    );
};

export default Nav;