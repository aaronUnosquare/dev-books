import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_DNz_VwZo.mjs';
import { a as setOnSetGetEnv } from './runtime_x9uYhqlb.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await response.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
🌟 Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "/Users/admin/Documents/Github/dev-books/src/components/BookScore.astro", void 0);

const $$file = "/Users/admin/Documents/Github/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
