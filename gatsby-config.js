/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `David Bonachera`,
        author: {
            name: `David Bonachera`,
            summary: `currently lives and works in Barcelona for Alibaba.`,
        },
        description: `Errands of a tech worker.`,
        siteUrl: `https://www.davidbonachera.fr`,
        social: {
            twitter: `CarreTriangle`,
        },
    },
    plugins: ["gatsby-plugin-image", {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            "trackingId": "UA-43076579-1"
        }
    },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap", {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                path: `${__dirname}/src/images/`,
            },
            __key: "images"
        }, {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                ],
            },
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
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
                    include:`${__dirname}/src/assets/svg'`,
                },
            },
        },]
};
