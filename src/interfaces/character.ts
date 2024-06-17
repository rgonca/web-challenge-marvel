
export interface CharacterDetails {
  name?: string;
  imagePath?: string;
  imageExtension?: string;
  description?: string;
}
export interface Character {
  [id: string]: { [key: string]: CharacterDetails };
  };