import { HashRouter, Routes, Route } from 'react-router-dom'
import { TransitionProvider } from './context/TransitionContext'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'

function AppRoutes() {
  return (
    <TransitionProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:slug" element={<CategoryPage />} />
      </Routes>
    </TransitionProvider>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}
