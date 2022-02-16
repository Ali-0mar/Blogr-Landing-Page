import "./laptop.styles.css";
import laptop from "../../Assets/illustration-laptop-desktop.svg";
import mlaptop from "../../Assets/illustration-laptop-mobile.svg";
export const Laptop = () => {
        return (
                <section className="row laptop ">
                        <div className="col-lg-6">
                                <picture>
                                        <source media="(min-width: 992px)" srcset={laptop} />
                                        <img src={mlaptop} alt="Laptop icon" />
                                </picture>
                        </div>
                        <div className="text-center text-lg-start col-lg-5 align-self-lg-center pb-5 mx-lg-4 px-lg-4">
                                <h3>Free, open, simple</h3>
                                <p className="fs-6 text-muted  mt-3">
                                        Blogr is a free and open source application backed by a large community of helpful developers. It supports
                                        features such as code suntax highlighting. RSS feeds, social media integration, third-party commenting tools,
                                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn
                                </p>
                                <h3 className="mt-4">Powerful tooling</h3>
                                <p className="fs-6 text-muted  mt-3">
                                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a
                                        breeze, but capable of producing even thee most complicated sites.
                                </p>
                        </div>
                </section>
        );
};
