import ReactMarkdown from 'react-markdown'
import { GuideSidebar, GuideSidebarProps } from '../components/guide-sidebar'
import introduction from '../markdown/basics/introduction.md?raw'
import deeperExplanation from '../markdown/basics/deeper-explanation.md?raw'
import becomeACreator from '../markdown/creators/become-a-creator.md?raw'
import mintArt from '../markdown/creators/mint-art.md?raw'
import publishContent from '../markdown/creators/publish-content.md?raw'
import accessApi from '../markdown/creators/access-api.md?raw'
import quickStart from '../markdown/integration-guides/quick-start.md?raw'
import nodejsExamples from '../markdown/integration-guides/node-js-examples.md?raw'
import nextjsIntegration from '../markdown/integration-guides/nextjs-integration.md?raw'
import rehypeRaw from 'rehype-raw'
import { useEffect, useState } from 'react'

type ContentEntry = {
  title: string
  markdown: string
  id: string
}

type Chapter = {
  title: string
  description: string
  items: ContentEntry[]
  href: string
}

const chapters: Chapter[] = [
  {
    title: 'Basics',
    description: 'Introduction to Access Protocol ecosystem',
    items: [
      {
        title: 'Introduction',
        markdown: introduction,
        id: 'introduction',
      },
      {
        title: 'Deeper explanation',
        markdown: deeperExplanation,
        id: 'deeper-explanation',
      },
    ],
    href: '/guide#basics',
  },
  {
    title: 'For Creators',
    description: 'How to use Access Protocol as a creator',
    items: [
      {
        title: 'Become a creator',
        markdown: becomeACreator,
        id: 'become-a-creator',
      },
      {
        title: "Mint art on Access Hub",
        markdown: mintArt,
        id: 'mint-art',
      },
      {
        title: "Publish content on Access Hub",
        markdown: publishContent,
        id: 'publish-content',
      },
      {
        title: "Access API",
        markdown: accessApi,
        id: 'access-api',
      },
    ],
    href: '/guide#for-creators',
  },
  {
    title: "Integration guides",
    description: "How to integrate Access Protocol into your app",
    items: [
      {
        title: "Quick start",
        markdown: quickStart,
        id: 'quick-start',
      },
      {
        title: "Node.js examples",
        markdown: nodejsExamples,
        id: 'nodejs-examples',
      },
      {
        title: "Next.js integration",
        markdown: nextjsIntegration,
        id: 'nextjs-integration',
      },
    ],
    href: '/guide#integration-guides',
  },
]

const navigation: GuideSidebarProps['items'] = chapters.map(chapter => ({
  title: chapter.title,
  href: chapter.href,
  items: chapter.items.map(item => ({
    title: item.title,
    href: `${chapter.href}#${item.id}`,
  }))
}))

export function Guide() {
  const [currentHash, setCurrentHash] = useState(window.location.hash.split('#')[1]);
  
  useEffect(() => {
    const handleHashChange = () => {
      const sectionId = window.location.hash.split('#')[2];
      setCurrentHash(window.location.hash.split('#')[1]);
      if(sectionId) {
        const section = document.getElementById(sectionId);
        if(section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentChapter = chapters.find(c => c.href.includes(currentHash)) || chapters[0];
  const chapterIndex = chapters.indexOf(currentChapter);
  
  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <div className="w-full h-full bg-theme-bg-secondary flex-1 flex">
      <GuideSidebar items={navigation} showSearch={false} />
      <main className="flex-1">
        <div className="p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl">{currentChapter.title}</h1>
            <div className="flex gap-4">
              {prevChapter && (
                <a 
                  href={prevChapter.href}
                  className="text-theme-text-secondary hover:text-theme-text"
                >
                  ← {prevChapter.title}
                </a>
              )}
              {nextChapter && (
                <a 
                  href={nextChapter.href}
                  className="text-theme-text-secondary hover:text-theme-text"
                >
                  {nextChapter.title} →
                </a>
              )}
            </div>
          </div>

          <div className="h-px bg-theme-border my-8" />

          {currentChapter.items.map((item, index) => (
            <div key={item.id}>
              <section id={item.id} className="md-section">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold text-theme-text mb-6">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl text-theme-text mt-8 mb-4">{children}</h2>,
                    p: ({children}) => <p className="text-theme-text-secondary mb-4">{children}</p>,
                    ol: ({children}) => <ol className="list-decimal pl-6 mb-4 text-theme-text-secondary">{children}</ol>,
                    li: ({children}) => <li className="mb-2">{children}</li>,
                    pre: ({children}) => <pre className="my-2 bg-theme-bg-secondary p-3 shadow-sm border border-theme-border rounded-md overflow-x-auto">{children}</pre>,
                    code: ({children}) => <code className="bg-theme-bg-secondary p-1 rounded-md text-sm">{children}</code>,
                    blockquote: ({children}) => <div className="bg-theme-bg-secondary p-4 rounded-md border-l-4 border-theme-accent">{children}</div>,
                    a: ({children, href}) => (
                      <a href={href} className="text-theme-accent hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {item.markdown}
                </ReactMarkdown>
              </section>
              {index < currentChapter.items.length - 1 && (
                <div className="h-px bg-theme-border my-8" />
              )}
            </div>
          ))}
        </div>
        <div className="h-[40vh]" />
      </main>
    </div>
  )
} 