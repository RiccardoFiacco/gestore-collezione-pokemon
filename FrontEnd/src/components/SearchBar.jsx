import { SearchHoc } from "../Hoc/SearchHoc";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

function SearchBar({ onInputChange }) {
  const { search } = useContext(GlobalContext);
  return (
    <input
      type="text"
      className="border rounded"
      value={search}
      onChange={(e) => {
        onInputChange(e);
      }}
    />
  );
}

const SearchBarWithHoc = SearchHoc(SearchBar);
export { SearchBarWithHoc as SearchBar };
