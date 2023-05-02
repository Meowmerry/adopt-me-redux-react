import { useState } from "react"; // drop useContext
import { useDispatch } from "react-redux";
import { adopt, unaopt } from "./adoptedPetSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPetQuery } from "./petApiService";
// import { useQuery } from "@tanstack/react-query";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
// import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // const results = useQuery(["details", id], fetchPet);
  const { isLoading, data: pet } = useGetPetQuery(id);

  /**
   * add with the hooks at the top
   * This useDispatch is it gives you back a function here, which allows you to give actions to our core store.
   */
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  // const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  // if (results.isLoading) {
  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  // const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    // setAdoptedPet(pet);
                    // navigate("/");
                    dispatch(adopt(pet));
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
