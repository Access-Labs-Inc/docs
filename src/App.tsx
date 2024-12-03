import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ApiDocs } from './pages/api-docs'
import { Guide } from './pages/guide'
import { TabBar } from './components/tab-bar'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <TabBar />
        <Routes>
          <Route path="/api" element={<ApiDocs />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/" element={<Navigate to="/guide" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
