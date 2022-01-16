import { c as create_ssr_component } from "../../chunks/index-dca6450b.js";
const browser = false;
const dev = false;
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-l63c6c.svelte-l63c6c{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}.content.svelte-l63c6c p.svelte-l63c6c{text-align:center}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content svelte-l63c6c"}"><h1>About this app</h1>
	<p class="${"svelte-l63c6c"}">This is a a simple word app created to play with friends
	</p>
</div>`;
});
export { About as default, hydrate, prerender, router };
