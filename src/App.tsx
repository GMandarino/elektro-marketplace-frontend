import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import SearchErrorPage from './pages/SearchErrorPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex justify-center">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/erro-pesquisa" element={<SearchErrorPage />} />
            <Route path="*" element={<div>Página não encontrada!</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;