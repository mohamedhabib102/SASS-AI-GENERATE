import { create } from 'zustand';
import Cookies from 'js-cookie';

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

export const useAuthStore = create((set) => ({
  user: initialUser,
  isAuthenticated: !!initialUser,
  login: (userData) => {
    const userToSave = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      role: userData.role,
      avatar: userData.avatar,
    };
    Cookies.set('user', JSON.stringify(userToSave), { expires: 3 });
    set({ 
      user: userToSave,
      isAuthenticated: true 
    });
  },
  logout: () => {
    Cookies.remove('user');
    set({ user: null, isAuthenticated: false });
  },
}));
