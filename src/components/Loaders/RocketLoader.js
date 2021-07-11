import React from "react";

function RocketLoader(props) {

    return (
        <div className="rocket-loader-outer full-box">
            <div className="rocket-loader-wrapper">
                <div className="body">
                    <span>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </span>
                    <div className="base">
                        <span/>
                        <div className="face"/>
                    </div>
                </div>
                <div className="longfazers">
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div>
                <h1 className="loader-text full-width">{props.message}</h1>
            </div>
        </div>
    );
}

export default RocketLoader;