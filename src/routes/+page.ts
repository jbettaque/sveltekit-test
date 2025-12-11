import { env } from '$env/dynamic/public';

export function load() {
	return {
		svelteTestVar: env.PUBLIC_SVELTE_TEST_VAR
	};
}
