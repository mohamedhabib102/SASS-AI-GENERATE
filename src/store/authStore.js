import { create } from 'zustand';
import Cookies from 'js-cookie';

const getInitialToken = () => Cookies.get('token') || sessionStorage.getItem('token') || null;

const getInitialUser = () => {
  const userStr = Cookies.get('user');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
  return null;
};

const initialUser = getInitialUser();
const initialToken = getInitialToken();

export const useAuthStore = create((set) => ({
  user: initialUser,
  token: initialToken,
  isAuthenticated: !!(initialUser || initialToken),
  login: (userData, tokenData) => {
    const userToSave = {
      id: userData?.id,
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone,
      role: userData?.role,
      avatar: userData?.avatar,
    };
    if (tokenData) {
      Cookies.set('token', tokenData, { expires: 7 });
      sessionStorage.setItem('token', tokenData);
    }
    Cookies.set('user', JSON.stringify(userToSave), { expires: 7 });
    set({ 
      user: userToSave,
      token: tokenData || getInitialToken(),
      isAuthenticated: true 
    });
  },
  logout: () => {
    Cookies.remove('user');
    Cookies.remove('token');
    sessionStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
