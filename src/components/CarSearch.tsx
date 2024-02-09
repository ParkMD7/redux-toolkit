import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();

  // @ts-expect-error I havent typed the store yet so ignoring this
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(event.currentTarget.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={searchTerm} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default CarSearch;
