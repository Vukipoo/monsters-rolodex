import React from 'react'

function SearchBox(props) {
  return (

    <input
    calssName = {ClassName}
    type ='search'
    placeholder={thisplaceholder}
    onChange={onChangeHandler}
    const searchField = event.target.value.toLocaleLowerCase();
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setMonsters(() => {
      return { searchField }
    })

    />

    )
}

export default SearchBox