import { SearchHoc } from "../Hoc/SearchHoc";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

function SearchBar({ onInputChange }) {
  const { search } = useContext(GlobalContext);
  return (
    <input
      type="text"
      className="border-2 rounded-sm bg-gray-200 text-gray-800 w-2/3 py-1 px-4 text-xl "
      value={search}
      onChange={(e) => {
        onInputChange(e);
      }}
    />
  );
}

const SearchBarWithHoc = SearchHoc(SearchBar);
export { SearchBarWithHoc as SearchBar };
