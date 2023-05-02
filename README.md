# Adopt-me-Redux-ToolKit RTK with React

<img width="1446" alt="Screen Shot 2023-05-02 at 12 06 07 PM" src="https://user-images.githubusercontent.com/50789325/235735624-28a055c9-a379-45ce-99fd-6c75da1f1da7.png">

Redux Toolkit is a library that simplifies the process of writing Redux code. It provides a set of utilities and tools that help you write Redux logic in a more efficient and less verbose way. React-Redux is a library that connects Redux with React, allowing you to use Redux to manage your React application's state.

In this guide, we will be using Redux Toolkit and React-Redux to manage the state of a simple React application called "Adopt Me". Adopt Me is an application that displays a list of pets available for adoption. The user can filter the pets by type (e.g., dogs, cats, etc.) and location (e.g., New York, Los Angeles, etc.).

## Setting up the Project

To get started, you will need to have Node.js and npm installed on your system. Once you have these installed, you can create a new React project by running the following command:

```js
npx create-react-app adopt-me
```

This will create a new React project called "adopt-me" in your current directory.

Next, you will need to install the necessary dependencies for Redux Toolkit and React-Redux. You can do this by running the following command in your project directory:

```js
npm install @reduxjs/toolkit react-redux
```

## Creating the Redux Store

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // your reducers go here
  }
});
```

In this example, we are creating a new store with an empty reducer. We will add our reducers later.

```js
import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload; // reducer will change old state to new state
    },
    unaopt: (state, action) => {
      state.value = null;
    }
  }
});
```

In this example, we are creating a new slice of state called "pets". The initial state of this slice is an empty array. We are then defining a single reducer function called addPet. This function takes the current state and an action as arguments. The action contains a payload that represents the new pet that we want to add to the list. The addPet function simply pushes the new pet to the end of the pets array.

Finally, we are exporting the addPet function so that we can use it in our React components, and exporting the reducer function so that we can add it to our store.

## Connecting the Store to React

To connect the Redux store to our React application, we need to use the Provider component from the react-redux package. This component takes a store prop, which is the
