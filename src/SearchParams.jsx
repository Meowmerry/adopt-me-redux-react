import { useState } from "react"; // drop useContext
import { useSelector, useDispatch } from "react-redux";
import { useSearchQuery } from "./petApiService";
// import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
// import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
// import fetchSearch from "./fetchSearch";
import { all } from "./searchParamsSlice";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // const [adoptedPet] = useContext(AdoptedPetContext);
  /**
   *   This you're gonna give a function to pull data out from redux.
   *   This function is important to give us the information and subscription to Redux
   *   It is update the data
   */

  const adoptedPet = useSelector((state) => state.adoptedPet.value);
  const dispatch = useDispatch();

  /* Drop this one and create requestParams with useSlector to Redux
    const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
     });
   */
  // searchParams --> will have to be the same name with in store.js and reducer function name searchParams
  const searchParams = useSelector((state) => state.searchParams.value);

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  // const results = useQuery(["search", searchParams], fetchSearch);
  let { data: pets } = useSearchQuery(searchParams);
  pets ?? [];
  // const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          // setRequestParams(obj);
          dispatch(all(obj));
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
