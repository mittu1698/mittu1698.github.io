/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    pathPrefix: "/mittu1698.github.io",
    plugins: [
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "gatsby-plugin-sass",
        "react-pdf",
        "react-bootstrap",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
    ],
}
