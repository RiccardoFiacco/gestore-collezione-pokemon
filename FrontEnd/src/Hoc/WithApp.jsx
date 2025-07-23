/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function WithApp(Component) {
  return (props) => {
    const { search } = useContext(GlobalContext);
    async function pokeCall() {
      console.log(search);
      try {
        const result = await axios.get({
          url: "https://api.pokemontcg.io/v2/cards",
          headers: { "X-Api-Key": import.meta.env.VITE_API_KEY },
          params: { name: search },
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    return <Component {...props} getCards={pokeCall} />;
  };
}

export { WithApp };
