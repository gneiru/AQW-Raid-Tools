import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		adapter: adapter({
            split: true
        })
	},

    preprocess: [preprocess({
        postcss: true
    })]
};

export default config;
