import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index-dca6450b.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/logo-9bdf725f.png";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-12f7c1j.svelte-12f7c1j{display:flex;justify-content:space-between}.corner.svelte-12f7c1j.svelte-12f7c1j{width:4rem;height:4rem}.corner.svelte-12f7c1j a.svelte-12f7c1j{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-12f7c1j img.svelte-12f7c1j{width:6rem;height:6rem;object-fit:contain}nav.svelte-12f7c1j.svelte-12f7c1j{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-12f7c1j.svelte-12f7c1j{width:2rem;height:3rem;display:block}path.svelte-12f7c1j.svelte-12f7c1j{fill:var(--background)}ul.svelte-12f7c1j.svelte-12f7c1j{position:relative;padding:0;margin:0;height:3rem;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-12f7c1j.svelte-12f7c1j{position:relative;height:100%}li.active.svelte-12f7c1j.svelte-12f7c1j::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-12f7c1j a.svelte-12f7c1j{display:flex;height:100%;align-items:center;padding:0 1rem;color:var(--heading-color);font-weight:700;font-size:0.8rrem;text-transform:uppercase;letter-spacing:0.1rem;text-decoration:none;transition:color 0.2s linear}a.svelte-12f7c1j.svelte-12f7c1j:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-12f7c1j"}"><div class="${"corner svelte-12f7c1j"}"><a href="${"/"}" class="${"svelte-12f7c1j"}"><img${add_attribute("src", logo, 0)} alt="${"PureFlow"}" class="${"svelte-12f7c1j"}"></a></div>

	<nav class="${"svelte-12f7c1j"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-12f7c1j"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-12f7c1j"}"></path></svg>
		<ul class="${"svelte-12f7c1j"}"><li class="${["svelte-12f7c1j", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-12f7c1j"}">Home</a></li>
			<li class="${["svelte-12f7c1j", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-12f7c1j"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-12f7c1j"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-12f7c1j"}"></path></svg></nav>

	<div class="${"corner svelte-12f7c1j"}"></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p>visit <a href="${"/about"}" class="${"svelte-1izrdc8"}">Home</a> to learn about us</p>
</footer>`;
});
export { _layout as default };
