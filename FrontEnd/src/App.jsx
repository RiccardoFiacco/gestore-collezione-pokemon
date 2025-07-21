import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext.js"
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import { useState } from "react";

function App() {
  //variabile globale per la ricerca e il filtro dei pokemon
  const [search, setSearch] = useState("");


  return (
    <>
      <GlobalContext.Provider value={{
        search, setSearch
      }}>
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
