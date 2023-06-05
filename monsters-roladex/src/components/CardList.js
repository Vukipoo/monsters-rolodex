import React from 'react'
import Card from './CardContainer'

const CardList = ({ monsters }) => (
        <div className = 'card-list'>
            {monsters.map((monster) => {
                return <Card monster = {monster} />
            })}
            </div>
    )   

export default CardList