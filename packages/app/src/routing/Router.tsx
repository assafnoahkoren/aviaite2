import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from '../pages/chat/chat';
import LoginPage from '../pages/login/login';
import ProfilePage from '../pages/profile/profile';
import RegisterPage from '../pages/register/register';
import SettingsPage from '../pages/settings/settings';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
} 