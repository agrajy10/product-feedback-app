import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import theme from './styles/theme';

import Container from './layout/Container';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <h1>Product invoice app</h1>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
