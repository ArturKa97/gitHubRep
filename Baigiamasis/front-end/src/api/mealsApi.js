import HTTP from "./"
import {useQuery} from "react-query";


const getMeals = () => HTTP.get("meals/all")
    .then(response => response.data)

const useMeals = () => {
    const context = useQuery('getMeals', getMeals)
    return {...context, meals: context.data}
}

export {getMeals, useMeals}