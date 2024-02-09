import { useSelector } from "react-redux";

import { Car } from "../types/types";

const CarValaue = () => {
  // @ts-expect-error I havent typed the store yet so ignoring this
  const totalCost: number = useSelector(({ cars: { carList, searchTerm }}) => {
    return carList
    .filter((car: Car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .reduce((total: number, car: Car) => total += car.cost, 0);
  });

  return (
    <div className="car-value">Total Cost: ${totalCost}</div>
  );
};

export default CarValaue;
