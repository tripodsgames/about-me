// vite.config.js
import handlebars from 'vite-plugin-handlebars';
import virtualHtml from 'vite-plugin-virtual-html';
import en from './src/text/en.json';
import pt from './src/text/pt.json';

const pages = {
    index: '/src/index.html',
    english: '/src/index.html',
}

const pageData = {
    '/index.html': pt,
    '/english.html': en
};

/** @type {import('vite').UserConfig} */
const config = {
    root: 'src',
    base: '/about-me/',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    plugins: [
        virtualHtml({
            pages: pages,
            indexPage: 'index'
        }),
        handlebars({
            context(pagePath) {
                return pageData[pagePath];
            }
        })
    ]
};

export default config;
