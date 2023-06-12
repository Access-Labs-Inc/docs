import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Access Protocol Docs',
      social: {
        github: 'https://github.com/Access-Labs-Inc/docs',
      },
      sidebar: [
        {
          label: 'Basics',
          items: [
            { label: 'Introduction', link: '/ecosystem/introduction/' },
            { label: 'Deeper explanation', link: '/ecosystem/understanding/' },
          ],
        },
        {
          label: 'Creator Guides',
          items: [
            { label: 'Become creator', link: '/creator-guides/new-creator/' },
            { label: 'How to use API', link: '/creator-guides/api/' },
          ],
        },
        {
          label: 'Integration Guides',
          items: [
            { label: 'Quick start', link: '/integration-guides/integration/' },
            { label: 'Custom integration (Node.js)', link: '/integration-guides/custom_integration/' },
          ],
        },
        {
          label: 'Solana',
          autogenerate: { directory: 'solana' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
