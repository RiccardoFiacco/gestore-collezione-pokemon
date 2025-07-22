import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext.js"
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import { useEffect, useState } from "react";

function App() {
  //variabile globale per la ricerca e il filtro dei pokemon
  const [search, setSearch] = useState("");
  const [pokeCards, setPokeCards] = useState([]);
  
  useEffect(() => {
     
  },[search])


  return (
    <>
      <GlobalContext.Provider value={{
        search, setSearch, pokeCards, setPokeCards
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
