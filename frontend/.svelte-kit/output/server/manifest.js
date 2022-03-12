export const manifest = {
	appDir: "_app",
	assets: new Set(["google.svg","logo.png"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png"},
		entry: {"file":"start-2ec6523a.js","js":["start-2ec6523a.js","chunks/vendor-958d3afb.js","chunks/singletons-a6a7384f.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/editprofile2\/?$/,
				params: null,
				path: "/editprofile2",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/editprofile\/?$/,
				params: null,
				path: "/editprofile",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/home\/?$/,
				params: null,
				path: "/home",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/main\/?$/,
				params: null,
				path: "/main",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		]
	}
};
