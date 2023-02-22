import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
