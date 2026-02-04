import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';
import starlightAutoSidebar from 'starlight-auto-sidebar';

export default defineConfig({
  site: 'https://docs.closm.llc',
  integrations: [
    starlight({
      title: {
        en: 'CLOSM Docs',
        ja: 'CLOSM Docs',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ja: {
          label: '日本語',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/closm',
        },
      ],
      sidebar: [
        {
          label: 'CLOSM i',
          autogenerate: { directory: 'i' },
        },
      ],
      plugins: [starlightAutoSidebar(), ion()],
      customCss: [
        '@fontsource-variable/inter',
        '@fontsource-variable/noto-sans-jp',
        './src/styles/custom.css',
      ],
    }),
  ],
});
