import { c as createComponent, b as createAstro, d as addAttribute, l as renderScript, a as renderTemplate, r as renderComponent, p as renderHead, q as renderSlot } from './astro/server_DNz_VwZo.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/admin/Documents/Github/dev-books/node_modules/.pnpm/astro@5.14.1_@types+node@24.6.0_@vercel+functions@2.2.13_jiti@2.6.0_lightningcss@1.30.1_rollup@4.52.3_typescript@5.9.2/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/admin/Documents/Github/dev-books/node_modules/.pnpm/astro@5.14.1_@types+node@24.6.0_@vercel+functions@2.2.13_jiti@2.6.0_lightningcss@1.30.1_rollup@4.52.3_typescript@5.9.2/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/admin/Documents/Github/dev-books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
