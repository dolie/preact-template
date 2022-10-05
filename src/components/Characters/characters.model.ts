export interface Character {
  "id": number;
  "name": string,
  "species": Species,
  "status": Status,
  "image": string
}

export type Species = "Human" | "Alien"
type Status = "Alive" | "unknown" | "Dead" 