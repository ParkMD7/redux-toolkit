import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  // @ts-expect-error I havent typed the store yet so ignoring this
  const name = useSelector((state) => state.form.name);
  // @ts-expect-error I havent typed the store yet so ignoring this
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeName(event.currentTarget.value));
  };

  const handleCostChange = (event: React.FormEvent<HTMLInputElement>) => {
    // adding "|| 0 " to protect against edge case of user deleting value in text input
    // calling parseInt on that value (an empty string) results in NaN
    const value = parseInt(event.currentTarget.value) || 0;
    dispatch(changeCost(value));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default browser behavior to refresh the page on form submission
    event.preventDefault();

    dispatch(addCar({ name, cost }))
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleOnSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
