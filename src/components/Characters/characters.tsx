import { useQuery } from '@urql/preact';
import { Species } from './characters.model';
import { getCharacters } from './getCharacters';
import { graphql } from '@/gql'

const getgetCharacters = graphql(getCharacters);

export function Characters({ species }: {species: Species}){
  const [result, reexecuteQuery] = useQuery({
    query: getgetCharacters,
    variables: {
      filter: {
        species,
        status: 'Alive'
      },
      page: 1
    }
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <button onClick={() => reexecuteQuery({ requestPolicy: 'network-only' })}>
        Refetch without cache
      </button>
      
      <ul>
        {data?.characters?.results?.map(c => (
          <li key={c?.id}>
            <img src={c?.image || ''} alt={`${c?.name  } avatar`} />
            <p>{c?.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}