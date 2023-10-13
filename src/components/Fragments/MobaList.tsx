import React from "react";
import { HeroListProps } from "../../interface/MobileLegends";

const HeroList: React.FC<HeroListProps> = ({
  heroes,
  searchTerm,
  onSearch,
}) => {
  const filteredHeroes = heroes.filter((hero) =>
    hero.hero_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="m-5">
      <input
        type="text"
        placeholder="Cari Hero..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="border p-2"
      />
      <div className="mt-4">
        <ul>
          {filteredHeroes.map((hero) => (
            <li className="border mb-2 p-3 rounded" key={hero.hero_id}>
              {/* <img src={hero.hero_avatar} alt={hero.hero_name} /> */}
              <h3 className="font-bold text-xl">{hero.hero_name}</h3>
              <p>Role: {hero.hero_role}</p>
              <p>Specially: {hero.hero_specially}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroList;
