import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/AuthSlice';
import { Header, Footer } from './Components/index';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    
    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData);
      dispatch(login({ userData: parsedUserData }));
      setLoading(false);
    } else {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-[#F6F6F2]">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;

