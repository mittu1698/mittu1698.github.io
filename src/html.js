import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div className="page-loader-wrapper" id="___initialLoader">
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
            <h1 className="loader-text" style={{fontFamily: "JetBrainsMonoItalic, serif"}}>Hold on, let me fetch it asap!</h1>
        </div>
        <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
