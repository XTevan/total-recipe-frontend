export interface Recipe {
    createdAt: string;
    id: number;
    imagePath: string;
    ingredients: string[];
    instructions: string[];
    name: string;
    portionSize: number;
    vegetarian: boolean;
}