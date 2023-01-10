const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-8feda990.js","imports":["_app/immutable/start-8feda990.js","_app/immutable/chunks/index-7f3551f2.js","_app/immutable/chunks/singletons-c90912a5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-ac04f2a2.js'),
			() => import('./chunks/1-36e1a8cc.js'),
			() => import('./chunks/2-307505d7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
