import "./art.styles.css";
import mobiles from "../../Assets/illustration-phones.svg";
export const Art = () => {
        return (
                <div className="Art pb-lg-5">
                        <section className="row">
                                <div className="col-lg-6 mobiles">
                                        <img src={mobiles} />
                                </div>
                                <div className="align-self-lg-center col-lg-6 infrastrucure me-auto text-center text-light">
                                        <h3>State of the Art Infrastructure</h3>
                                        <p>
                                                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                                                connectivity. This ensures your site will load instantly, no matter where your readers are, keeping
                                                your site competitive
                                        </p>
                                </div>
                        </section>
                </div>
        );
};
