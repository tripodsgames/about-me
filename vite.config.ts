// vite.config.js
import Handlebars from 'handlebars';
import path from 'path';
import virtualHtml from 'vite-plugin-virtual-html';
import en from './src/text/en.json';
import pt from './src/text/pt.json';
import type { UserConfig } from 'vite';

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

const config: UserConfig = {
    root: path.join(__dirname, "src"),
    base: '/',
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
