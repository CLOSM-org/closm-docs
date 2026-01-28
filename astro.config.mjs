import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';

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
          translations: { ja: 'CLOSM i' },
          items: [
            {
              label: 'Introduction',
              translations: { ja: 'はじめに' },
              slug: 'i/intro',
            },
            {
              label: 'Tutorial',
              translations: { ja: 'チュートリアル' },
              slug: 'i/tutorial',
            },
          ],
        },
      ],
      plugins: [ion()],
      customCss: [
        '@fontsource-variable/inter',
        '@fontsource-variable/noto-sans-jp',
        './src/styles/custom.css',
      ],
    }),
  ],
});
