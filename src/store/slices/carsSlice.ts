import { createSlice, nanoid } from "@reduxjs/toolkit";

import { Car } from "../../types/types";

interface AddCarActionPayload {
  type: string;
  payload: {
    name: string;
    cost: number;
  };
}

interface InitialState {
  searchTerm: string;
  carList: Car[];
}

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carList: [],
  } as InitialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: AddCarActionPayload) {
      // want to mutate the state array and add a new car
      state.carList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.carList.filter((car) => car.id !== action.payload);

      state.carList = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
