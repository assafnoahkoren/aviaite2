import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from '../pages/chat/chat';
import LoginPage from '../pages/login/login';
import ProfilePage from '../pages/profile/profile';
import RegisterPage from '../pages/register/register';
import SettingsPage from '../pages/settings/settings';
import AppShell from '../components/AppShell/AppShell';

function Home() {
  return <h1>Home Page</h1>;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat" element={<AppShell><ChatPage /></AppShell>} />
        <Route path="/settings" element={<AppShell><SettingsPage /></AppShell>} />
        <Route path="/profile" element={<AppShell><ProfilePage /></AppShell>} />
      </Routes>
    </BrowserRouter>
  );
} 