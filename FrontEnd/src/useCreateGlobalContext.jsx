import { useState } from "react";

export function useCreateGlobalContextVar() {
  const [search, setSearch] = useState("");
  const [pokeCards, setPokeCards] = useState([]);
  return { search, setSearch, pokeCards, setPokeCards };
}
