import HTTP from "./"
import {useMutation, useQuery} from "react-query";

const addDayOfEating = (dayOfEating) => HTTP.post("/day", {...dayOfEating, name: dayOfEating.dayOfEatingName})

const getDaysOfEating= () => HTTP.get("/day")
    .then(response => response.data)

const useDaysOfEating = () => {
    const context = useQuery('getDaysOfEating', getDaysOfEating)
    return {...context, daysOfEating: context.data}
}
const useAddDayOfEating = () => {
    const mutation = useMutation(addDayOfEating)
    return mutation.mutateAsync
}

export {getDaysOfEating, useDaysOfEating, useAddDayOfEating}