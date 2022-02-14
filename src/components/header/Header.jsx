import { Link } from "react-router-dom";
import "./header.styles.css";

export const Header = () => {
        return (
                <header className="p-3 pb-5">
                        <nav className="navbar navbar-expand-md navbar-dark mb-5 align-items-md-baseline">
                                <h1 className="me-3 fs-2 text-light">Blogr</h1>
                                <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav light-nav align-content-center align-items-center flex-wrap w-100 ">
                                                <li className="nav-item dropdown text-center mb-3">
                                                        <Link
                                                                className="nav-link dropdown-toggle text-light fw-bold"
                                                                to="#"
                                                                id="navbarDropdownMenuLink"
                                                                role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                Product
                                                        </Link>
                                                        <ul className="dropdown-menu rounded-3 text-center" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                        <Link className="dropdown-item " to="#">
                                                                                Product 1
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Product 2
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Product 2
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li className="nav-item dropdown text-center mb-3">
                                                        <Link
                                                                className="nav-link dropdown-toggle text-light fw-bold"
                                                                to="#"
                                                                id="navbarDropdownMenuLink"
                                                                role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                Company
                                                        </Link>
                                                        <ul className="dropdown-menu rounded-3 text-center" aria-labelledby="navbarDropdownMenuLink">
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Company 1
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Company 2
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Company 3
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li className="nav-item dropdown text-center mb-3 me-md-auto">
                                                        <Link
                                                                className="nav-link dropdown-toggle text-light fw-bold "
                                                                to="#"
                                                                id="navbarDropdownMenuLink"
                                                                role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                Connect
                                                        </Link>
                                                        <ul className="dropdown-menu rounded-3 text-center" aria-labelledby="navbarDropdownMenuLink ">
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Connect method 1
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Connect method 2
                                                                        </Link>
                                                                </li>
                                                                <li>
                                                                        <Link className="dropdown-item" to="#">
                                                                                Connect method 3
                                                                        </Link>
                                                                </li>
                                                        </ul>
                                                </li>
                                                <li className=" nav-item dropdown btns border-0 mb-3 me-2">
                                                        <Link className="dropdown-item text-reset fw-bold" to="#" id="navbarDropdownMenuLink">
                                                                Login
                                                        </Link>
                                                </li>
                                                <li className="nav-item dropdown light-btns mb-3">
                                                        <Link className="dropdown-item text-reset fw-bold" to="#" id="navbarDropdownMenuLink">
                                                                Sign up
                                                        </Link>
                                                </li>
                                        </ul>
                                </div>
                        </nav>
                        <div className="text-light mb-4">
                                <h2 className="mb-4 text-center">A modern puplishing platform</h2>
                                <h6 className="mb-4 text-center">Grow your audience and build your online brand</h6>
                                <div className="d-flex justify-content-center">
                                        <button className="light-btns mx-3">Start for Free</button>
                                        <button className="btns">Learn More</button>
                                </div>
                        </div>
                </header>
        );
};
