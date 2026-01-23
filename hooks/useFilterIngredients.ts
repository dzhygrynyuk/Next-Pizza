import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

interface ReturnProps {
    ingredients: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

    React.useEffect(() => {
        async function fetchIngregients() {
            try {
                const data = await Api.ingredients.getAll();
                setIngredients(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchIngregients();

    }, []);

    return { ingredients };
};