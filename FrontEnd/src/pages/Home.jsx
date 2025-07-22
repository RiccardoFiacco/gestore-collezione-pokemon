import { SearchBar } from "../components/searchBar";

export default function Home() {

  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 className=" font-semibold text-4xl mb-3.5 text-white">Cerca qui la carta che vuoi</h1>
      <div className="flex justify-center items-center">
        <SearchBar />
      </div>
    </div>
  );
}
