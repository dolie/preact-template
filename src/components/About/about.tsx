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
      <h1>Page about</h1>

      <form class="m-4">
        <label htmlFor="">Species selection : </label>

        <select
          class="m-4 bg-slate-100 dark:bg-slate-800"
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