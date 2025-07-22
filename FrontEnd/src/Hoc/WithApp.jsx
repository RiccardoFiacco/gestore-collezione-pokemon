import axios from "axios";

function WithApp(Component) {
  return (props) => {
    async function pokeCall() {
      try {
        const result = await axios.get({
          url: "",
          headers: { "X-Api-Key": "" },
          params: { name: "" },
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
