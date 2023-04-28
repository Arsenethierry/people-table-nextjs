import { useQuery } from "@tanstack/react-query";

type Props = {
    pageSize: number
}

export const useGetPeople = ({ pageSize }: Props) => {

    return useQuery(['people'], async () => {
        const result = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${pageSize}`);
        const data = await result.json();
        return data;
    });
}