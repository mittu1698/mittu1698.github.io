import React, {useEffect, useState} from "react";
import Header from "./Header"
import Footer from "./Footer"
import LandingPage from "./LandingPage";
import DetailsPage from "./DetailsPage";

function MainComponent() {

    const [tailLeft, setTailLeft] = useState(window.innerWidth / 2);
    const [tailTop, setTailTop] = useState(window.innerWidth / 2);
    const [tailOpacity, setTailOpacity] = useState(0);

    const moveTail = (e) => {
        setTailLeft(e.pageX + 5);
        setTailTop(e.pageY + 5);
        setTailOpacity(1);
    }

    useEffect(() => {

        window.addEventListener('mousemove', moveTail)

        return () => {
            window.removeEventListener('mousemove', moveTail)
        }
    }, []);

    return (
        <>
            <div className="outer-body-wrapper">
                <div className="outer-wrapper">
                    <div className="main-wrapper">
                        {/*<Header/>*/}
                        <LandingPage/>
                        <div className="sidebar-editor-footer full-box">
                            <div className="sidebar-editor full-box">
                                <DetailsPage/>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mouseTail"
                 style={{left: tailLeft + "px", top: tailTop + "px", opacity: tailOpacity}}/>
        </>
    );
}

export default MainComponent;