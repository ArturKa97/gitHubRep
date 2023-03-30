import HTTP from "./"
import {useMutation, useQuery} from "react-query";

const createMeal = (meal) => HTTP.post("/meals", {...meal, name: meal.mealName})

const getMeals = () => HTTP.get("/meals")
    .then(response => response.data)

const useMeals = () => {
    const context = useQuery('getMeals', getMeals)
    return {...context, meals: context.data}
}
const useCreateMeal = () => {
    const mutation = useMutation(createMeal)
    return mutation.mutateAsync
}

export {getMeals, useMeals, useCreateMeal}