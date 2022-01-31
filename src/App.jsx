import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/globalStyles';
import theme from './styles/theme';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
