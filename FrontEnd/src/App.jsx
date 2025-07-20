import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext.js"
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      <GlobalContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
