import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/general.scss';
import AuthForms from './pages/authForms';
import { AuthProvider } from './context/authContext';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth')
  }, []);

  return (
    <AuthProvider>
      <AuthForms />
    </AuthProvider>
  )
}

export default App
