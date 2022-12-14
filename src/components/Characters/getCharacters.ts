export const getCharacters = /* GraphQL */`
  query Characters($filter: FilterCharacter, $page: Int){
    characters(filter: $filter, page: $page){
      info {
        count,
        pages
      },
      results {
        id
        name,
        species,
        status,
        image
      }
    }
  }
`