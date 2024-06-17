const mapResultEntries = (response: any, mapper: any) =>
  Object.fromEntries(response.data.results.map(mapper))

export const formatCharactersResponse = (response: any) =>
  mapResultEntries(
    response,
    ({
      id,
      name,
      description,
      thumbnail: { path: imagePath, extension: imageExtension }
    }: any) => [
      id,
      {
        name,
        imagePath,
        imageExtension,
        description
      }
    ]
  )

export const formatComicsResponse = (response: any) =>
  mapResultEntries(
    response,
    ({
      id,
      title,
      modified,
      thumbnail: { path: imagePath, extension: imageExtension }
    }: {
      id: number
      title: string
      modified: string
      thumbnail: {
        path: string
        extension: string
      }
    }) => [
      id,
      {
        title,
        year: new Date(modified).getUTCFullYear(),
        image: `${imagePath}/portrait_xlarge.${imageExtension}`
      }
    ]
  )
