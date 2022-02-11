import 'normalize.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import FeedbackDetails from './pages/FeedbackDetails';
import CreateFeedback from './pages/CreateFeedback';
import EditFeedback from './pages/EditFeedback';
import Roadmap from './pages/Roadmap';
import Login from './pages/Login';
import Register from './pages/Register';
import FrogotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute';
import StyledToastcontainer from './components/StyledToastContainer';

import { loadFeedbackList } from './features/feedback/feedbackListSlice';

import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';
import { setUser } from './features/auth/authSlice';
import { auth, db } from './firebase-config';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, 'feedback'));
    const firestoreUnsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch(loadFeedbackList(data));
    });

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('isAuthenticated', true);
        dispatch(setUser(user.toJSON()));
      } else {
        localStorage.removeItem('isAuthenticated');
        dispatch(setUser(null));
      }
    });

    return () => {
      authUnsubscribe();
      firestoreUnsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
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
        </AnimatePresence>
        <StyledToastcontainer
          autoClose={1500}
          closeButton={false}
          hideProgressBar={true}
          position="top-center"
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
