import { createSlice, nanoid } from "@reduxjs/toolkit";

interface AddCarActionPayload {
  type: string;
  payload: {
    name: string;
    cost: number;
  };
}

interface Car {
  name: string;
  cost: number;
  id: string;
}

interface InitialState {
  searchTerm: string;
  cars: Car[];
}

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  } as InitialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: AddCarActionPayload) {
      // want to mutate the state array and add a new car
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.cars.filter((car) => car.id !== action.payload.id)

      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
