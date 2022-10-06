import { signal } from "@preact/signals";
import { Species } from "@/components/Characters/characters.model";

export const species = signal<Species[]>(['Human', 'Alien']);
export const formInputSpecies = signal<Species>(species.value[0]);