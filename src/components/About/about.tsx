import { Characters } from '@/components/Characters/characters';
import { Species } from '@/components/Characters/characters.model';
import { species, formInputSpecies } from '@/store/global';

export function About(){

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    formInputSpecies.value = target.value as Species;
  }

  return (
    <>
      <p>Page about</p>
      <form>
        <label htmlFor="">Sélection de l'espèce</label>
        <select
          value={formInputSpecies.value}
          onChange={onChange}
        >
          {species.value.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </form>
      <Characters species={formInputSpecies.value} />
    </>
  )
}