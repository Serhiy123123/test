import { useState } from "react";
import Header from "../Header/Header";
import styles from "./App.module.css";

const App = () => {
  const [count, setCount] = useState<number>(1);

  const buttonHandlerPlus = () => {
    setCount(count + 1);
  };
  const buttonHandlerMinus = () => {
    setCount(count - 1);
  };
  const buttonHandler = () => {
    setCount(0);
  };

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, exercitationem dicta aliquam repudiandae iste
            placeat modi reiciendis pariatur molestias amet, neque natus ipsum distinctio mollitia?
          </div>
          <div>Count:{count}</div>
          <div>
            <button onClick={buttonHandlerPlus}>press F</button>
            <button onClick={buttonHandlerMinus}>press D</button>
            <button onClick={buttonHandler}>press R</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
