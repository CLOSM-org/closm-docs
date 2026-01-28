import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.closm.llc',
  integrations: [
    starlight({
      title: {
        ja: 'CLOSM Docs',
        en: 'CLOSM Docs',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
        en: {
          label: 'English',
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
          translations: { en: 'CLOSM i' },
          items: [
            {
              label: 'はじめに',
              translations: { en: 'Introduction' },
              slug: 'i/intro',
            },
            {
              label: 'チュートリアル',
              translations: { en: 'Tutorial' },
              slug: 'i/tutorial',
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
