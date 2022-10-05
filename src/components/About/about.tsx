import { useSignal } from '@preact/signals';
import { Characters } from '../Characters/characters';
import { Species } from '../Characters/characters.model';

export function About(){

  const species = useSignal<Species[]>(['Human', 'Alien']);
  const formInputSpecies = useSignal<Species>(species.value[0]);

  return (
    <>
      <p>Page about</p>
      <Characters species={formInputSpecies.value} />
    </>
  )
}