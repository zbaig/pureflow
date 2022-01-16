import { c as create_ssr_component, d as each, b as add_attribute, v as validate_component } from "../../chunks/index-dca6450b.js";
var Words_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".board.svelte-4ibm9n.svelte-4ibm9n{width:350px;height:420px;display:grid;grid-template-rows:repeat(4, 1fr);grid-gap:5px;padding:10px;box-sizing:border-box}.words.svelte-4ibm9n.svelte-4ibm9n{display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:5px}.words-viewport.svelte-4ibm9n.svelte-4ibm9n{width:100%;height:100%;overflow:hidden;text-align:center;position:relative}.words-viewport.svelte-4ibm9n input.svelte-4ibm9n{line-height:4rem;color:var(--text-color);text-transform:uppercase;background-color:var(--color-absent);border-radius:6px 6px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-ms-flex:1 1 auto;font-weight:lighter;height:5.25rem;margin-left:4%;min-width:2rem;max-width:4rem;text-align:center;-o-text-overflow:clip;text-overflow:clip;border:1px solid;border-color:#eaeaea}",
  map: null
};
const Words = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const answer = ["L", "O", "D", "U"];
  $$result.css.add(css$1);
  return `<div class="${"board svelte-4ibm9n"}"><div class="${"words svelte-4ibm9n"}">${each(answer, (w) => {
    return `<div class="${"words-viewport svelte-4ibm9n"}"><input class="${"svelte-4ibm9n"}"${add_attribute("value", w, 0)}>
			</div>`;
  })}</div>
	<div class="${"words svelte-4ibm9n"}">${each(answer, (w) => {
    return `<div class="${"words-viewport svelte-4ibm9n"}"><input class="${"svelte-4ibm9n"}"${add_attribute("value", w, 0)}>
			</div>`;
  })}</div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-mjk9ig.svelte-mjk9ig{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-mjk9ig.svelte-mjk9ig{width:100%}.welcome.svelte-mjk9ig.svelte-mjk9ig{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-mjk9ig img.svelte-mjk9ig{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-mjk9ig"}"><h1 class="${"svelte-mjk9ig"}"><div class="${"welcome svelte-mjk9ig"}"><picture><source srcset="${"welcome.png"}" type="${"image/png"}">
				<img src="${"welcome.png"}" alt="${"Welcome"}" class="${"svelte-mjk9ig"}"></picture></div></h1>
	${validate_component(Words, "Words").$$render($$result, {}, {}, {})}
</section>`;
});
export { Routes as default, prerender };
