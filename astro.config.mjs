// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Panduan Fansubbing',
			social: {
				github: 'https://github.com/koisuru-project/panduan-fansubbing',
			},
			sidebar: [
				{
					label: 'Persiapan',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Jobdesk', slug: 'persiapan/jobdesk' },
					],
				}
			],
		}),
	],
});
