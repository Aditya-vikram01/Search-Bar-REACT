import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='search-bar-container'>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
