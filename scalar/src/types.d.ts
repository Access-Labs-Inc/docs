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