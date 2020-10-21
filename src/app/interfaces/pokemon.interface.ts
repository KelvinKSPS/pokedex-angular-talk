export interface Pokemon {
    id: string;
    num: string;
    name: string;
    height: string;
    weight: string;
    type: string[];
    weaknesses: string[];
    next_evolution?: {
        num: string;
        name: string;
    }[];
}
