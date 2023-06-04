import React from 'react'
import { Component } from 'react'

Class CardList extends Component(props) {
    console.log(props)

    const { monsters } = this.props
    render () {
    return ( 
        <div>
            {monsters.map(monster => (

            <h1 key={monster.id}>{monster.name}</h1>

            ))}</div>
    )
            }
}

export default CardList