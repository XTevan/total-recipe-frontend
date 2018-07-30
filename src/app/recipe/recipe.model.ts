export interface Recipe {
    createdAt: string;
    id: number;
    imagePath: string;
    ingredients: object[];
    instructions: string[];
    name: string;
    portionSize: number;
    vegetarian: boolean;
}