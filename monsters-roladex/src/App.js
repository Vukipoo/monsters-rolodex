import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import { useEffect } from "react";



function App() {

const [monsters, setMonsters ] = useState({
  monsters: [],
})
const [searchField, setSearchField] = useState('')


useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => setMonsters(() => {
    return {monsters: users}
  }))})



/* componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
} */

  return (

    <>

    <SearchBox 
    onChangeHandler = {onSearchChange} 
    placeholder = 'search monsters' 
    className='search-box'
    />
    <CardList monsters={filteredMonsters} />

    </>
  );
}

export default App;
