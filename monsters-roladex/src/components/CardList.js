import React from 'react'

export default function CardList(props) {
    console.log(props)

    const { monsters } = this.props

    return ( 
        <div>
            {monsters.map(monster => (

            <h1 key={monster.id}>{monster.name}</h1>

            ))}</div>
    )
}