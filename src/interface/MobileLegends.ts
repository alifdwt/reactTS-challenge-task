interface Hero {
  hero_id: number;
  hero_name: string;
  hero_avatar: string;
  hero_role: string;
  hero_specially: string;
}

interface HeroListProps {
  heroes: Hero[];
  searchTerm: string;
  onSearch: (term: string) => void;
}

export type { Hero, HeroListProps };
