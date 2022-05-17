import { useDispatch, useSelector } from "react-redux";
import "./scss/main.scss";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const add10 = () => {
    dispatch(actions.addBy(10));
  };
  const deduct10 = () => {
    dispatch(actions.addBy(-10));
  };
  return (
    <section className="counter-app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className="buttons">
        <button onClick={deduct10}>Deduct 10</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={add10}>Add 10</button>
      </div>
    </section>
  );
}

export default App;
