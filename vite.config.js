// vite.config.js
import Handlebars from 'handlebars';
import path from 'path';
import virtualHtml from 'vite-plugin-virtual-html';
import en from './src/text/en.json';
import pt from './src/text/pt.json';

const pages = {
    index: {
        template: '/src/index.html',
        data: pt
    },
    english: {
        template: '/src/index.html',
        data: en
    }
};

/** @type {import('vite').UserConfig} */
const config = {
    root: path.join(__dirname, "src"),
    base: '/about-me/',
    build: {
        outDir: path.join(__dirname, "dist"),
        emptyOutDir: false
    },
    plugins: [
        virtualHtml({
            pages: pages,
            indexPage: 'index',
            render: (template, data) => Handlebars.compile(template)(data)
        })
    ]
};

export default config;
