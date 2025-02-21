import type { GlobPattern } from 'glob'
import type { MinimizeOptions } from './fetchMarkdown'

export type PresetConfig = {
	/** The pretty title of the preset */
	title: string
	/** Optional description of the preset */
	description?: string
	/** The owner of the GitHub repository */
	owner: string
	/** The name of the GitHub repository */
	repo: string
	/** List of glob patterns for including files */
	glob: GlobPattern[]
	/** List of glob patterns for excluding files */
	ignore?: GlobPattern[]
	/** Optional prompt to provide additional context or instructions to language models */
	prompt?: string
	/** Minimization options for the content */
	minimize?: MinimizeOptions
}

const SVELTE_5_PROMPT =
	'Always use Svelte 5 runes and Svelte 5 syntax. Runes do not need to be imported, they are globals. $state() runes are always declared using `let`, never with `const`. When passing a function to $derived, you must always use $derived.by(() => ...). Error boundaries can only catch errors during component rendering and at the top level of an $effect inside the error boundary. Error boundaries do not catch errors in onclick or other event handlers.'

export const combinedPresets: Record<string, PresetConfig> = {
	'svelte-complete-medium': {
		title: '⭐️ Svelte + SvelteKit (Recommended - Medium preset)',
		description:
			'Complete Svelte + SvelteKit docs excluding certain advanced sections, legacy, notes and migration docs',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: [
			// Svelte
			'**/apps/svelte.dev/content/docs/svelte/**/*.md',
			// SvelteKit
			'**/apps/svelte.dev/content/docs/kit/**/*.md'
		],
		ignore: [
			// Svelte ignores
			'**/apps/svelte.dev/content/docs/svelte/07-misc/04-custom-elements.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/06-v4-migration-guide.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/07-v5-migration-guide.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/99-faq.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/xx-reactivity-indepth.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/21-svelte-legacy.md',
			'**/apps/svelte.dev/content/docs/svelte/99-legacy/**/*.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-runtime-errors.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-runtime-warnings.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-compiler-errors.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-compiler-warnings.md',
			'**/xx-*.md',
			// SvelteKit ignores
			'**/apps/svelte.dev/content/docs/kit/25-build-and-deploy/*adapter-*.md',
			'**/apps/svelte.dev/content/docs/kit/25-build-and-deploy/99-writing-adapters.md',
			'**/apps/svelte.dev/content/docs/kit/30-advanced/70-packaging.md',
			'**/apps/svelte.dev/content/docs/kit/40-best-practices/05-performance.md',
			'**/apps/svelte.dev/content/docs/kit/40-best-practices/10-accessibility.md', // May the a11y gods have mercy on our souls
			'**/apps/svelte.dev/content/docs/kit/60-appendix/**/*.md',
			'**/xx-*.md'
		],
		prompt: SVELTE_5_PROMPT,
		minimize: {
			removeLegacy: true,
			removePlaygroundLinks: true,
			removeNoteBlocks: true,
			removeDetailsBlocks: true,
			removeHtmlComments: true,
			normalizeWhitespace: true
		}
	},
	'svelte-complete': {
		title: 'Svelte + SvelteKit (Large preset)',
		description: 'Complete Svelte + SvelteKit docs excluding legacy, notes and migration docs',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: [
			'**/apps/svelte.dev/content/docs/svelte/**/*.md',
			'**/apps/svelte.dev/content/docs/kit/**/*.md'
		],
		ignore: [],
		prompt: SVELTE_5_PROMPT,
		minimize: {
			removeLegacy: true,
			removePlaygroundLinks: true,
			removeNoteBlocks: true,
			removeDetailsBlocks: true,
			removeHtmlComments: true,
			normalizeWhitespace: true
		}
	},
	'svelte-complete-tiny': {
		title: 'Svelte + SvelteKit (Tiny preset)',
		description: 'Tutorial content only',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: [
			'**/apps/svelte.dev/content/tutorial/**/*.md',
			'**/apps/svelte.dev/content/docs/svelte/02-runes/**/*.md'
		],
		ignore: [],
		prompt: SVELTE_5_PROMPT,
		minimize: {
			removeLegacy: true,
			removePlaygroundLinks: true,
			removeNoteBlocks: true,
			removeDetailsBlocks: true,
			removeHtmlComments: true,
			normalizeWhitespace: true
		}
	},
	'svelte-migration': {
		title: 'Svelte + SvelteKit migration guide',
		description: 'Only Svelte + SvelteKit docs for migrating ',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: [
			// Svelte
			'**/apps/svelte.dev/content/docs/svelte/07-misc/07-v5-migration-guide.md',
			// SvelteKit
			'**/apps/svelte.dev/content/docs/kit/60-appendix/30-migrating-to-sveltekit-2.md'
		],
		ignore: [],
		prompt: SVELTE_5_PROMPT,
		minimize: {
			removeLegacy: true,
			removePlaygroundLinks: true,
			removeNoteBlocks: true,
			removeDetailsBlocks: true,
			removeHtmlComments: true,
			normalizeWhitespace: true
		}
	}
}

export const sveltePresets: Record<string, PresetConfig> = {
	svelte: {
		title: 'Svelte (Full)',
		description: 'Complete documentation including legacy and reference',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: ['**/apps/svelte.dev/content/docs/svelte/**/*.md'],
		ignore: [],
		prompt: SVELTE_5_PROMPT,
		minimize: {}
	},
	'svelte-medium': {
		title: 'Svelte (Medium)',
		description: 'Complete documentation including legacy and reference',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: ['**/apps/svelte.dev/content/docs/svelte/**/*.md'],
		ignore: [
			// Svelte ignores
			'**/apps/svelte.dev/content/docs/svelte/07-misc/04-custom-elements.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/06-v4-migration-guide.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/07-v5-migration-guide.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/99-faq.md',
			'**/apps/svelte.dev/content/docs/svelte/07-misc/xx-reactivity-indepth.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/21-svelte-legacy.md',
			'**/apps/svelte.dev/content/docs/svelte/99-legacy/**/*.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-runtime-errors.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-runtime-warnings.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-compiler-errors.md',
			'**/apps/svelte.dev/content/docs/svelte/98-reference/30-compiler-warnings.md'
		],
		prompt: SVELTE_5_PROMPT,
		minimize: {
			removeLegacy: true,
			removePlaygroundLinks: true,
			removeNoteBlocks: true,
			removeDetailsBlocks: true,
			removeHtmlComments: true,
			normalizeWhitespace: true
		}
	}
}

export const svelteKitPresets: Record<string, PresetConfig> = {
	sveltekit: {
		title: 'SvelteKit (Full)',
		description: 'Complete documentation including legacy and reference',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		prompt: SVELTE_5_PROMPT,
		glob: ['**/apps/svelte.dev/content/docs/kit/**/*.md'],
		minimize: {}
	},
	'sveltekit-medium': {
		title: 'SvelteKit (Medium)',
		description: 'Complete documentation including legacy and reference',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		prompt: SVELTE_5_PROMPT,
		glob: ['**/apps/svelte.dev/content/docs/kit/**/*.md'],
		minimize: {
			removeLegacy: true,
			removePlaygroundLinks: true,
			removeNoteBlocks: true,
			removeDetailsBlocks: true,
			removeHtmlComments: true,
			normalizeWhitespace: true
		},
		ignore: [
			// SvelteKit ignores
			'**/apps/svelte.dev/content/docs/kit/25-build-and-deploy/*adapter-*.md',
			'**/apps/svelte.dev/content/docs/kit/25-build-and-deploy/99-writing-adapters.md',
			'**/apps/svelte.dev/content/docs/kit/30-advanced/70-packaging.md',
			'**/apps/svelte.dev/content/docs/kit/40-best-practices/05-performance.md',
			'**/apps/svelte.dev/content/docs/kit/40-best-practices/10-accessibility.md', // May the a11y gods have mercy on our souls
			'**/apps/svelte.dev/content/docs/kit/60-appendix/**/*.md',
			'**/xx-*.md'
		]
	}
}

export const otherPresets: Record<string, PresetConfig> = {
	'svelte-cli': {
		title: 'Svelte CLI - npx sv',
		owner: 'sveltejs',
		repo: 'svelte.dev',
		glob: ['**/apps/svelte.dev/content/docs/cli/**/*.md'],
		ignore: [],
		minimize: {}
	},
	'quarkus-medium': {
		title: 'Quarkus (medium)',
		owner: 'quarkusio',
		repo: 'quarkus',
		glob: [
			// Quarkus
			'**/docs/src/main/asciidoc/cache.adoc',
			'**/docs/src/main/asciidoc/cdi-reference.adoc',
			'**/docs/src/main/asciidoc/cdi.adoc',
			'**/docs/src/main/asciidoc/centralized-log-management.adoc',
			'**/docs/src/main/asciidoc/config-extending-support.adoc',
			'**/docs/src/main/asciidoc/config-mappings.adoc',
			'**/docs/src/main/asciidoc/config-reference.adoc',
			'**/docs/src/main/asciidoc/config-secrets.adoc',
			'**/docs/src/main/asciidoc/config.adoc',
			'**/docs/src/main/asciidoc/context-propagation.adoc',
			'**/docs/src/main/asciidoc/continuous-testing.adoc',
			'**/docs/src/main/asciidoc/credentials-provider.adoc',
			'**/docs/src/main/asciidoc/databases-dev-services.adoc',
			'**/docs/src/main/asciidoc/datasource.adoc',
			'**/docs/src/main/asciidoc/dev-mode-differences.adoc',
			'**/docs/src/main/asciidoc/dev-services.adoc',
			'**/docs/src/main/asciidoc/duplicated-context.adoc',
			'**/docs/src/main/asciidoc/getting-started-dev-services.adoc',
			'**/docs/src/main/asciidoc/getting-started-reactive.adoc',
			'**/docs/src/main/asciidoc/getting-started-testing.adoc',
			'**/docs/src/main/asciidoc/getting-started.adoc',
			'**/docs/src/main/asciidoc/hibernate-orm-panache.adoc',
			'**/docs/src/main/asciidoc/hibernate-orm.adoc',
			'**/docs/src/main/asciidoc/hibernate-reactive-panache.adoc',
			'**/docs/src/main/asciidoc/hibernate-reactive.adoc',
			'**/docs/src/main/asciidoc/http-reference.adoc',
			'**/docs/src/main/asciidoc/lifecycle.adoc',
			'**/docs/src/main/asciidoc/logging.adoc',
			'**/docs/src/main/asciidoc/maven-tooling.adoc',
			'**/docs/src/main/asciidoc/mutiny-primer.adoc',
			'**/docs/src/main/asciidoc/observability-devservices-lgtm.adoc',
			'**/docs/src/main/asciidoc/observability-devservices.adoc',
			'**/docs/src/main/asciidoc/observability.adoc',
			'**/docs/src/main/asciidoc/openapi-swaggerui.adoc',
			'**/docs/src/main/asciidoc/opentelemetry-logging.adoc',
			'**/docs/src/main/asciidoc/opentelemetry-metrics.adoc',
			'**/docs/src/main/asciidoc/opentelemetry-tracing.adoc',
			'**/docs/src/main/asciidoc/opentelemetry.adoc',
			'**/docs/src/main/asciidoc/quarkus-reactive-architecture.adoc',
			'**/docs/src/main/asciidoc/reactive-event-bus.adoc',
			'**/docs/src/main/asciidoc/reactive-routes.adoc',
			'**/docs/src/main/asciidoc/reactive-sql-clients.adoc',
			'**/docs/src/main/asciidoc/redis-reference.adoc',
			'**/docs/src/main/asciidoc/redis.adoc',
			'**/docs/src/main/asciidoc/rest-client.adoc',
			'**/docs/src/main/asciidoc/rest-data-panache.adoc',
			'**/docs/src/main/asciidoc/rest-json.adoc',
			'**/docs/src/main/asciidoc/rest-virtual-threads.adoc',
			'**/docs/src/main/asciidoc/rest.adoc',
			'**/docs/src/main/asciidoc/scheduler-reference.adoc',
			'**/docs/src/main/asciidoc/scheduler.adoc',
			'**/docs/src/main/asciidoc/scripting.adoc',
			'**/docs/src/main/asciidoc/security-architecture.adoc',
			'**/docs/src/main/asciidoc/security-authentication-mechanisms.adoc',
			'**/docs/src/main/asciidoc/security-authorize-web-endpoints-reference.adoc',
			'**/docs/src/main/asciidoc/security-basic-authentication-howto.adoc',
			'**/docs/src/main/asciidoc/security-basic-authentication.adoc',
			'**/docs/src/main/asciidoc/security-cors.adoc',
			'**/docs/src/main/asciidoc/security-csrf-prevention.adoc',
			'**/docs/src/main/asciidoc/security-customization.adoc',
			'**/docs/src/main/asciidoc/security-getting-started-tutorial.adoc',
			'**/docs/src/main/asciidoc/security-jdbc.adoc',
			'**/docs/src/main/asciidoc/security-jpa.adoc',
			'**/docs/src/main/asciidoc/security-jwt-build.adoc',
			'**/docs/src/main/asciidoc/security-jwt.adoc',
			'**/docs/src/main/asciidoc/security-keycloak-admin-client.adoc',
			'**/docs/src/main/asciidoc/security-keycloak-authorization.adoc',
			'**/docs/src/main/asciidoc/security-ldap.adoc',
			'**/docs/src/main/asciidoc/security-oauth2.adoc',
			'**/docs/src/main/asciidoc/security-proactive-authentication.adoc',
			'**/docs/src/main/asciidoc/security-properties.adoc',
			'**/docs/src/main/asciidoc/security-testing.adoc',
			'**/docs/src/main/asciidoc/smallrye-health.adoc',
			'**/docs/src/main/asciidoc/smallrye-metrics.adoc',
			'**/docs/src/main/asciidoc/testing-components.adoc',
			'**/docs/src/main/asciidoc/tests-with-coverage.adoc',
			'**/docs/src/main/asciidoc/tls-registry-reference.adoc',
			'**/docs/src/main/asciidoc/transaction.adoc',
			'**/docs/src/main/asciidoc/validation.adoc',
			'**/docs/src/main/asciidoc/vertx-reference.adoc',
			'**/docs/src/main/asciidoc/vertx.adoc',
			'**/docs/src/main/asciidoc/virtual-threads.adoc',
			'**/docs/src/main/asciidoc/websockets-next-reference.adoc',
			'**/docs/src/main/asciidoc/websockets-next-tutorial.adoc',
			'**/docs/src/main/asciidoc/websockets.adoc',
			// Mutiny
			'**/documentation/docs/reference/what-is-reactive-programming.md',
			'**/documentation/docs/reference/what-makes-mutiny-different.md',
			'**/documentation/docs/reference/uni-and-multi.md',
			'**/documentation/docs/reference/going-reactive-a-few-pitfalls.md',
			'**/documentation/docs/guides/branching.md',
			'**/documentation/docs/guides/collecting-items.md',
			'**/documentation/docs/guides/combining-items.md',
			'**/documentation/docs/guides/completion-stage.md',
			'**/documentation/docs/guides/context-passing.md',
			'**/documentation/docs/guides/converters.md',
			'**/documentation/docs/guides/delaying-events.md',
			'**/documentation/docs/guides/dropped-exceptions.md',
			'**/documentation/docs/guides/eliminate-duplicates-and-repetitions.md',
			'**/documentation/docs/guides/emission-threads.md',
			'**/documentation/docs/guides/emit-on-vs-run-subscription-on.md',
			'**/documentation/docs/guides/filtering-items.md',
			'**/documentation/docs/guides/handling-null.md',
			'**/documentation/docs/guides/handling-timeouts.md',
			'**/documentation/docs/guides/imperative-to-reactive.md',
			'**/documentation/docs/guides/integrate-a-non-reactive-source.md',
			'**/documentation/docs/guides/joining-unis.md',
			'**/documentation/docs/guides/logging.md',
			'**/documentation/docs/guides/merging-and-concatenating-streams.md',
			'**/documentation/docs/guides/multi-split.md',
			'**/documentation/docs/guides/pagination.md',
			'**/documentation/docs/guides/polling.md',
			'**/documentation/docs/guides/reactive-to-imperative.md',
			'**/documentation/docs/guides/replaying-multis.md',
			'**/documentation/docs/guides/rx.md',
			'**/documentation/docs/guides/shortcut-methods.md',
			'**/documentation/docs/guides/spies.md',
			'**/documentation/docs/guides/take-skip-items.md',
			'**/documentation/docs/guides/unchecked-exceptions.md',
			'**/documentation/docs/tutorials/creating-multi-pipelines.md',
			'**/documentation/docs/tutorials/creating-uni-pipelines.md',
			'**/documentation/docs/tutorials/handling-failures.md',
			'**/documentation/docs/tutorials/hello-mutiny.md',
			'**/documentation/docs/tutorials/observing-events.md',
			'**/documentation/docs/tutorials/retrying.md',
			'**/documentation/docs/tutorials/transforming-items-asynchronously.md',
			'**/documentation/docs/tutorials/transforming-items.md'
		],
		ignore: [],
		minimize: {}
	},
	'quarkus-minimal': {
		title: 'Quarkus (minimal)',
		owner: 'quarkusio',
		repo: 'quarkus',
		glob: [
			// Quarkus:	https://github.com/quarkusio/quarkus/blob/main/docs/src/main/asciidoc/README.adoc
			'**/docs/src/main/asciidoc/cdi-reference.adoc',
			'**/docs/src/main/asciidoc/cdi.adoc',
			'**/docs/src/main/asciidoc/config-reference.adoc',
			'**/docs/src/main/asciidoc/config-secrets.adoc',
			'**/docs/src/main/asciidoc/config.adoc',
			'**/docs/src/main/asciidoc/context-propagation.adoc',
			'**/docs/src/main/asciidoc/credentials-provider.adoc',
			'**/docs/src/main/asciidoc/datasource.adoc',
			'**/docs/src/main/asciidoc/duplicated-context.adoc',
			'**/docs/src/main/asciidoc/getting-started-reactive.adoc',
			'**/docs/src/main/asciidoc/getting-started.adoc',
			'**/docs/src/main/asciidoc/hibernate-orm-panache.adoc',
			'**/docs/src/main/asciidoc/hibernate-reactive-panache.adoc',
			'**/docs/src/main/asciidoc/http-reference.adoc',
			'**/docs/src/main/asciidoc/lifecycle.adoc',
			'**/docs/src/main/asciidoc/logging.adoc',
			'**/docs/src/main/asciidoc/maven-tooling.adoc',
			'**/docs/src/main/asciidoc/mutiny-primer.adoc',
			'**/docs/src/main/asciidoc/quarkus-reactive-architecture.adoc',
			'**/docs/src/main/asciidoc/reactive-event-bus.adoc',
			'**/docs/src/main/asciidoc/reactive-routes.adoc',
			'**/docs/src/main/asciidoc/reactive-sql-clients.adoc',
			'**/docs/src/main/asciidoc/rest-data-panache.adoc',
			'**/docs/src/main/asciidoc/rest-json.adoc',
			'**/docs/src/main/asciidoc/rest-virtual-threads.adoc',
			'**/docs/src/main/asciidoc/rest.adoc',
			'**/docs/src/main/asciidoc/security-architecture.adoc',
			'**/docs/src/main/asciidoc/security-authentication-mechanisms.adoc',
			'**/docs/src/main/asciidoc/security-authorize-web-endpoints-reference.adoc',
			'**/docs/src/main/asciidoc/security-cors.adoc',
			'**/docs/src/main/asciidoc/security-csrf-prevention.adoc',
			'**/docs/src/main/asciidoc/security-customization.adoc',
			'**/docs/src/main/asciidoc/security-getting-started-tutorial.adoc',
			'**/docs/src/main/asciidoc/security-jpa.adoc',
			'**/docs/src/main/asciidoc/security-ldap.adoc',
			'**/docs/src/main/asciidoc/security-proactive-authentication.adoc',
			'**/docs/src/main/asciidoc/transaction.adoc',
			'**/docs/src/main/asciidoc/validation.adoc',
			'**/docs/src/main/asciidoc/vertx-reference.adoc',
			'**/docs/src/main/asciidoc/vertx.adoc',
			'**/docs/src/main/asciidoc/virtual-threads.adoc',
			// Mutiny:	https://github.com/smallrye/smallrye-mutiny/blob/main/documentation/docs/index.md
			'**/documentation/docs/reference/what-is-reactive-programming.md',
			'**/documentation/docs/reference/what-makes-mutiny-different.md',
			'**/documentation/docs/reference/uni-and-multi.md',
			'**/documentation/docs/reference/going-reactive-a-few-pitfalls.md',
			'**/documentation/docs/guides/branching.md',
			'**/documentation/docs/guides/collecting-items.md',
			'**/documentation/docs/guides/combining-items.md',
			'**/documentation/docs/guides/completion-stage.md',
			'**/documentation/docs/guides/context-passing.md',
			'**/documentation/docs/guides/converters.md',
			'**/documentation/docs/guides/delaying-events.md',
			'**/documentation/docs/guides/dropped-exceptions.md',
			'**/documentation/docs/guides/eliminate-duplicates-and-repetitions.md',
			'**/documentation/docs/guides/emission-threads.md',
			'**/documentation/docs/guides/emit-on-vs-run-subscription-on.md',
			'**/documentation/docs/guides/filtering-items.md',
			'**/documentation/docs/guides/handling-null.md',
			'**/documentation/docs/guides/handling-timeouts.md',
			'**/documentation/docs/guides/imperative-to-reactive.md',
			'**/documentation/docs/guides/integrate-a-non-reactive-source.md',
			'**/documentation/docs/guides/joining-unis.md',
			'**/documentation/docs/guides/logging.md',
			'**/documentation/docs/guides/merging-and-concatenating-streams.md',
			'**/documentation/docs/guides/multi-split.md',
			'**/documentation/docs/guides/pagination.md',
			'**/documentation/docs/guides/polling.md',
			'**/documentation/docs/guides/reactive-to-imperative.md',
			'**/documentation/docs/guides/replaying-multis.md',
			'**/documentation/docs/guides/rx.md',
			'**/documentation/docs/guides/shortcut-methods.md',
			'**/documentation/docs/guides/spies.md',
			'**/documentation/docs/guides/take-skip-items.md',
			'**/documentation/docs/guides/unchecked-exceptions.md',
			'**/documentation/docs/tutorials/creating-multi-pipelines.md',
			'**/documentation/docs/tutorials/creating-uni-pipelines.md',
			'**/documentation/docs/tutorials/handling-failures.md',
			'**/documentation/docs/tutorials/hello-mutiny.md',
			'**/documentation/docs/tutorials/observing-events.md',
			'**/documentation/docs/tutorials/retrying.md',
			'**/documentation/docs/tutorials/transforming-items-asynchronously.md',
			'**/documentation/docs/tutorials/transforming-items.md'
		],
		ignore: [],
		minimize: {}
	}
}

export const presets = {
	...combinedPresets,
	...sveltePresets,
	...svelteKitPresets,
	...otherPresets
}

export function transformAndSortPresets(presetsObject) {
	return Object.entries(presetsObject)
		.map(([key, value]) => ({
			key: key.toLowerCase(),
			...value
		}))
		.sort()
}
