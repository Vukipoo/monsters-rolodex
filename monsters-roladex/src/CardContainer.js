import React from 'react'

function CardContainer() {

    const { name, email, id} = monster
  return (
    <div className='CardContainer'>
        <img src={`httpss://robohash.org/${id}?set=set2&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
   
    </div>
  )
}

export default CardContainer