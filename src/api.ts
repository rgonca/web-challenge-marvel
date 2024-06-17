import {
  formatCharactersResponse,
  formatComicsResponse
} from "./utils/formatters";

const baseUrl = process.env.NEXT_PUBLIC_ENDPOINT;
const publicKey: string = process.env.NEXT_PUBLIC_KEY ?? "";
const privateKey: string = process.env.PRIVATE_KEY ?? "";

const getData = async (path: string, queryParams = {}) => {
  let params = new URLSearchParams({
    apikey: publicKey,
    ...queryParams
  });

  return await fetch(`${baseUrl}${path}?${params}`)
    .then((e) => e.json())
    .catch((e) => console.error(e));
};

export const getCharacters = async (
  nameStartsWith: string,
  otherParams: any
) => {
  const queryParams: { limit: number; nameStartsWith?: string } = {
    limit: 50
  };
  if (typeof nameStartsWith == "string" && nameStartsWith.length > 0) {
    queryParams.nameStartsWith = nameStartsWith;
  }
  return formatCharactersResponse(
    await getData("characters", { ...queryParams, ...otherParams })
  );
};

export const getCharacter = async (characterId: any, otherParams: {} | undefined) =>
  formatCharactersResponse(
    await getData(`characters/${characterId}`, otherParams)
  );

  export const getCharacterComics = async (characterId: any, otherParams: {} | undefined) =>
    formatComicsResponse(
      await getData(`characters/${characterId}/comics`, {
        limit: 20,
        ...otherParams,
      })
    );