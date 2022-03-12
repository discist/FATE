const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/editprofile2.svelte"),
	() => import("../../src/routes/editprofile.svelte"),
	() => import("../../src/routes/home.svelte"),
	() => import("../../src/routes/main.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/editprofile2.svelte
	[/^\/editprofile2\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/editprofile.svelte
	[/^\/editprofile\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/home.svelte
	[/^\/home\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/main.svelte
	[/^\/main\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];