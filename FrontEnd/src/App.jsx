import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext.js";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import { WithApp } from "./Hoc/WithApp.jsx";

function App({ getCards }) {
  //variabile globale per la ricerca e il filtro dei pokemon
  const { search } = useContext(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      if (search) {
        getCards();
      }
    }, 1000);
  }, [search]);

  return (
    <>
      {/* <GlobalContext.Provider
        value={{
          search,
          setSearch,
          pokeCards,
          setPokeCards,
        }}
      > */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </GlobalContext.Provider> */}
    </>
  );
}

const AppHoc = WithApp(App);
export { AppHoc as App };
