import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

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
            { label: 'Mint art on HUB', link: '/creator-guides/mint-on-hub/' },
            { label: 'Publish content on HUB', link: '/creator-guides/publish-on-hub/' },
            { label: 'How to use API', link: '/creator-guides/api/' },
          ],
        },
        {
          label: 'Integration Guides',
          items: [
            { label: 'Quick start', link: '/integration-guides/integration/' },
            { label: 'How to use Node.js with CLI examples', link: '/integration-guides/custom_integration/' },
            { label: 'Start new Next.js app with template', link: '/integration-guides/nextjs_integration/' },
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
