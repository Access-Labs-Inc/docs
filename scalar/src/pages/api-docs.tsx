import { useEffect } from 'react'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

export function ApiDocs() {
  useEffect(() => {
    const element = document.querySelector('.darklight')
    if (element) {
      element.remove()
    }
  }, [])

  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://papi.accessprotocol.co/swagger/doc.json',
        },
      }}
    />
  )
} 