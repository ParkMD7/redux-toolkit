import { useDispatch, useSelector } from "react-redux";

import { removeCar } from "../store";
import { Car } from "../types/types";

const CarList = () => {
  const dispatch = useDispatch();

  // @ts-expect-error I havent typed the store yet so ignoring this
  const cars: Car[] = useSelector(({ cars: { carList, searchTerm }}) => {
    return carList.filter((car: Car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  });

    // @ts-expect-error I havent typed the store yet so ignoring this
    const name = useSelector((state) => state.form.name);

  const handleOnClick = (car: Car) => {
    console.log(car)
    dispatch(removeCar(car.id))
  }

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleOnClick(car)} className="button is-danger">Delete</button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
