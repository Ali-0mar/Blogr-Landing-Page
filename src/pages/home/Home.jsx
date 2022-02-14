import { Header } from "../../components/header/Header";
import { ImageRight } from "../../components/image-right/ImageRight";

import "./home.styles.css";
export const HomePage = () => {
        return (
                <div className="container-fluid">
                        <div className="row mb-5">
                                <Header />
                        </div>
                        <ImageRight />
                </div>
        );
};
