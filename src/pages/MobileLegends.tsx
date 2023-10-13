import { useEffect, useState } from "react";
import HeroList from "../components/Fragments/MobaList";

const MobileLegends = () => {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.dazelpro.com/mobile-legends/hero")
      .then((response) => response.json())
      .then((data) => setHeroes(data.hero));
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Mobile Legends Heroes
      </h1>
      <div className="max-w-md mx-auto">
        <HeroList heroes={heroes} searchTerm={search} onSearch={setSearch} />
      </div>
    </div>
  );
};

export default MobileLegends;
