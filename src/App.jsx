import 'normalize.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';

import Home from './pages/Home';
import FeedbackDetails from './pages/FeedbackDetails';
import CreateFeedback from './pages/CreateFeedback';
import EditFeedback from './pages/EditFeedback';
import Roadmap from './pages/Roadmap';
import Login from './pages/Login';
import Register from './pages/Register';
import FrogotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';

import { fetchFeedbackList } from './features/feedback/feedbackListThunk';

import { setUser } from './features/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeedbackList())
      .then(unwrapResult)
      .catch((error) => {
        toast.error(error);
      });

    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('isAuthenticated', true);
        dispatch(setUser(user.toJSON()));
      } else {
        localStorage.removeItem('isAuthenticated');
        dispatch(setUser(null));
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/feedback/:feedbackID" element={<FeedbackDetails />} />
            <Route path="/create-feedback" element={<PrivateRoute />}>
              <Route path="/create-feedback" element={<CreateFeedback />} />
            </Route>
            <Route path="/edit-feedback/:feedbackID" element={<PrivateRoute />}>
              <Route path="/edit-feedback/:feedbackID" element={<EditFeedback />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<FrogotPassword />} />
          </Routes>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
