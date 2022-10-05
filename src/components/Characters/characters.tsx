import { useQuery } from '@urql/preact';
import { Character, Species } from './characters.model';
import getCharacters from './getCharacters.gql';

export function Characters({ species }: {species: Species}){
  const [result, reexecuteQuery] = useQuery({
    query: getCharacters,
    variables: {
      filter: {
        species,
        status: "Alive"
      },
      page: 1
    }
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.characters.results.map((c: Character)=> (
        <li key={c.id}>
          <img src={c.image} alt={`${c.name  } avatar`} />
          <p>{c.name}</p>
        </li>
      ))}
    </ul>
  )
}