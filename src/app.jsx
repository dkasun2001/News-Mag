import { useState } from "preact/hooks";
import Navbar from "./Components/Navbar";
import NewsBord from "./Components/NewsBord";

const app = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsBord category={category}/>
    </>
  );
};

export default app;
