import { useQuery } from "@tanstack/react-query";

export const useGetPeople = () => {
    return useQuery(['people'], async () => {
        const result = await fetch('https://fakerapi.it/api/v1/persons');
        const data = await result.json();
        return data;
    });
}