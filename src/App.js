import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from "./pages/Main";/
import GlobalStyle from './styles/GlobalStyles';
import WritingPages from './pages/WritingPage';

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Main />} /> */}
          <Route exact path="/write" element={<WritingPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
