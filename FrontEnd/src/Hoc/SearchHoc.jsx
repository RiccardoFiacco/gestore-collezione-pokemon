/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export function SearchHoc(Component) {
  return (props) => {
    const { setSearch } = useContext(GlobalContext);
    function handleInputChange(event) {
      const currentValue = event.target.value;
      const currentChar = currentValue
        .charAt(currentValue.length - 1)
        .toLowerCase();
      //controllo se l'ultimo caratterie sia una lettera o spazio
      if ((currentChar >= "a" && currentChar <= "z") || currentChar === " ")
        setSearch(currentValue);
    }
    return <Component {...props} onInputChange={handleInputChange} />;
  };
}
