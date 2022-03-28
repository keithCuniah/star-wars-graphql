export interface ICharacter {
  id: string;
  gender: string;
  name: string;
  homeworld: { id: string; name: string };
  species: { id: string; name: string } | null;
}

export interface IFilm {
  id: string;
  title: string;
}
export interface ICharacterDetail extends ICharacter {
  films: Array<IFilm>;
}
