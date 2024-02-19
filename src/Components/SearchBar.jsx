import "../App.css";
import searchbar from "../assets/search-bar.svg";
import { useRef } from "react";

export default function SearchBar() {
  const value = useRef();

  function handleOnClick() {
    console.log(value.current.value);
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };
  return (
    <>
      <input
        className='search-bar-input'
        type='text'
        placeholder="Let's go on a ride 😉"
        ref={value}
        onKeyPress={handleKeyPress}
      />
      <button className='search-bar-button' onClick={handleOnClick}>
        Search
        <img src={searchbar} alt='Search Icon' className='search-icon' />
      </button>
    </>
  );
}
