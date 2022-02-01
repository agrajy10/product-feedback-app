import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';

import Home from './pages/Home';
import FeedbackDetails from './pages/FeedbackDetails';
import CreateFeedback from './pages/CreateFeedback';
import EditFeedback from './pages/EditFeedback';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/roadmap" element={<Roadmap />}></Route>
            <Route path="/feedback/:feedbackID" element={<FeedbackDetails />}></Route>
            <Route path="/create-feedback" element={<CreateFeedback />}></Route>
            <Route path="/edit-feedback/:feedbackID" element={<EditFeedback />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
