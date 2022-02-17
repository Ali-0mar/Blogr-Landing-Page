import { Last } from "react-bootstrap/esm/PageItem";
import { Link } from "react-router-dom";
import "./footer.styles.css";
export const Footer = () => {
        return (
                <footer className="row py-5 align-content-md-stretch text-center text-md-start">
                        <h1 className="col-md-3 text-center mb-4 mb-md-0">Blogr</h1>
                        <ul className="col-md-3 list-unstyled mt-3">
                                <h5 className="mb-3">Product</h5>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Overview
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Pricing
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Marketplace
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Features
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Integrations
                                        </Link>
                                </li>
                        </ul>
                        <ul className="col-md-3 list-unstyled mt-3">
                                <h5 className="mb-3">Company</h5>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                About
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Team
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Blog
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Careers
                                        </Link>
                                </li>
                        </ul>
                        <ul className="col-md-3 list-unstyled mt-3">
                                <h5 className="mb-3">Connect</h5>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Contact
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Newletter
                                        </Link>
                                </li>
                                <li className="my-2">
                                        <Link to="#" className="text-light text-decoration-none">
                                                Linkedin
                                        </Link>
                                </li>
                        </ul>
                </footer>
        );
};
