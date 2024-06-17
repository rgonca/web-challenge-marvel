export interface CharacterDetails {
  name?: string
  imagePath?: string
  imageExtension?: string
  description?: string
}
export type Character = Record<string, Record<string, CharacterDetails>>
