// @ts-check
const path = require("path");
/**
 * @type {import('gatsby').GatsbyConfig}
 */
const gatsbyConfig = {}
module.exports = gatsbyConfig

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.davidbonachera.fr`
    },
    plugins: ["gatsby-plugin-image", {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            "trackingId": "UA-43076579-1"
        }
    }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    }, {
        resolve: `gatsby-plugin-sass`,
        options: {
            postCssPlugins: [
                require("tailwindcss"),
                require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
            ],
        },
    }, {
        resolve: 'gatsby-plugin-layout',
        options: {
            component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
        },
    }, {
        resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
                include: path.resolve(__dirname, 'src/assets/svg'),
            },
        },
    },]
};
