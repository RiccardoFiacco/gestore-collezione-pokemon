import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { SearchBar } from "../components/searchBar";
export default function Home() {
  const { search } = useContext(GlobalContext);
  return (
    <div>
      <h1>{search}</h1>
      <SearchBar />
    </div>
  );
}
