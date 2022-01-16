export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","welcome.png"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain"},
		entry: {"file":"start-feedb92c.js","js":["start-feedb92c.js","chunks/vendor-0c2b5568.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\.json$/,
				params: null,
				load: () => import('./entries/endpoints/todos/index.json.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\/([^/]+?)\.json$/,
				params: (m) => ({ uid: m[1]}),
				load: () => import('./entries/endpoints/todos/_uid_.json.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/404\/?$/,
				params: null,
				path: "/404",
				a: [0,5],
				b: [1]
			}
		]
	}
};
