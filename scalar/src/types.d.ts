declare module '@scalar/api-reference-react' {
  export interface ApiReferenceProps {
    configuration: {
      spec: {
        url: string;
      };
    };
  }
  
  export function ApiReferenceReact(props: ApiReferenceProps): JSX.Element;
}

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import React from 'react'
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVGComponent
} 