// import { useQuery } from "@tanstack/react-query";
// import fetchBreedList from "./fetchBreedList";
import { useGetBreedsQuery } from "./petApiService";
export default function useBreedList(animal) {
  // const results = useQuery(["breeds", animal], fetchBreedList);
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal
  });

  if (!animal) {
    return [[], "loaded"];
  }
  // return [results?.data?.breeds ?? [], results.status];
  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}
