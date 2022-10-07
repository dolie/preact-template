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
      <button
        class="btn-primary m-4" 
        onClick={() => reexecuteQuery({ requestPolicy: 'network-only' })}
      >
        Refetch without cache
      </button>
      
      <ul class="max-w-sm mx-auto my-4 pl-20">
        {data?.characters?.results?.map(c => (
          <li key={c?.id} class="flex my-2 items-center">
            <img
              class="rounded w-10 h-10 mx-2"  
              src={c?.image || ''}
              alt={`${c?.name  } avatar`}
            />
            <p>{c?.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}