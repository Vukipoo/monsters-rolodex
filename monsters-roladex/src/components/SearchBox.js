import React from 'react'

function SearchBox(props) {
  return (

    <input
    calssName = {this.props.className}
    type ='search'
    placeholder={this.props.placeholder}
    onChange={this.props.onChangeHandler}
    />

    )
}

export default SearchBox