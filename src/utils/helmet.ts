// @ts-ignore
import favicon from '../assets/images/favicon.png';

const title = 'David Bonachera | Software Engineer';
const description = 'TL;DR : Errands of my life, tech related.';

export const helmet = {
    title,
    titleTemplate: '%s - David Bonachera',
    htmlAttributes: { lang: 'en' },
    meta: [
        { name: 'description', content: description },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, user-scalable=no',
        },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'msapplication-navbutton-color', content: '#000' },
        { name: 'msapplication-TileColor', content: '#000' },
        { name: 'theme-color', content: '#000' },

        { property: 'og:title', content: title },
        { property: 'og:image:alt', content: description },

        { name: 'twitter:title', content: title },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@CarreTriangle' },
        { name: 'twitter:creator', content: '@CarreTriangle' },
        { name: 'twitter:description', content: description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }],
};

