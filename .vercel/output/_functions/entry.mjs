import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DM0Dhbs3.mjs';
import { manifest } from './manifest_DMzXA3O1.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BfhOi55m.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DgIQVkoQ.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/libro/_id_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.1_@types+node@24.6.0_@vercel+functions@2.2.13_jiti@2.6.0_lightningcss@1.30.1_rollup@4.52.3_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/libro/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0880539c-2198-4871-b1fa-1bf277e4bccc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
