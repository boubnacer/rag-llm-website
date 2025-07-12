import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import MyAppBar from './components/AppBar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import UploadPage from './pages/UploadPage';
import AskPage from './pages/AskPage';
import DocumentsPage from './pages/DocumentsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appTheme = { ...theme, palette: { ...theme.palette, mode: darkMode ? 'dark' : 'light' } };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BrowserRouter>
        <MyAppBar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}