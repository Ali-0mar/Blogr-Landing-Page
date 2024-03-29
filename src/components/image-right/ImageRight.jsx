import "./image-right.styles.css";

import hero from "../../Assets/illustration-editor-desktop.svg";
import mhero from "../../Assets/illustration-editor-mobile.svg";

export const ImageRight = () => {
        return (
                <section className="future row flex-row-reverse align-items-center">
                        <h4 className="mt-5 text-center">Designed for the future</h4>
                        <div className="align-items-center  d-lg-flex flex-row-reverse">
                                <div className="col-lg-6 d-flex d-lg-block img-cont justify-content-center">
                                        {/* <picture> */}
                                        {/* <source media="(min-width: 992px)" srcset={hero} /> */}
                                        <img src={hero} alt="" />
                                        {/* </picture> */}
                                </div>
                                <aside className="col-lg-6  text-center text-lg-start">
                                        <article className="pt-5 fs-6 mt-3  lh-sm px-5">
                                                <h3 className="fs-4">Introducing an extensible editor</h3>
                                                <p className="text-muted mt-3">
                                                        Blogr features an exceedingly intuitive which lets you focus on one thing:creating content.
                                                        the editor supports mangment of multiple blogs and allows easy manipulation of embeds such as
                                                        images,videos, and Markdown.Extensibility with plugins and themes provide easy ways to add
                                                        functionality or change the looks of a blog.
                                                </p>
                                                <h3 className="mt-5">Robust content mangment</h3>
                                                <p className="text-muted mt-3">
                                                        Flexible content mangment enables users to easily move through posts. Increase the usability
                                                        of your blog by adding custmized categorizs, sections, format ,or flow. With this
                                                        functionality, you're in full control.
                                                </p>
                                        </article>
                                </aside>
                        </div>
                </section>
        );
};
