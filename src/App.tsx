import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ScrollManager from './components/ScrollManager';

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        {/* Vercel's cleanUrls hides the .html paths in production, but the dev
            server serves them directly, so keep them working too. */}
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/faq.html" element={<FaqPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
