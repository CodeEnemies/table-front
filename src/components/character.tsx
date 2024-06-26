import { Item, initialItem } from "./item";

export interface Character {
    // status aumenta durante o modo sanin
    status: number;
    hp: number;
    mana: number;
    stamina?: number;
    maxWeight?: number;
    item?: Item[];
}

export const initialCharacter: Character = {
    status: 0,
    hp: 20,
    mana: 20,
    stamina: 0,
    maxWeight: 0,
    item: [initialItem]
}