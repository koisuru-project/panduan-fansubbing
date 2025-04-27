// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Panduan Fansubbing',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/koisuru-project/panduan-fansubbing' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/za7XeBK8tS' },
			],
			sidebar: [
				{
					label: 'Persiapan',
					items: [
						{ label: 'Kata Pengantar', slug: 'persiapan/kata-pengantar' },
						{ label: 'Jobdesk', slug: 'persiapan/jobdesk' },
					],
				}
			],
		}),
	],
});
