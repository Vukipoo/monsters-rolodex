import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";



function App() {
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
