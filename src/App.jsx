import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Product invoice app</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
