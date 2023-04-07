import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {  
// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [singleDentist, setSingleDentist]= useState ({})
  const paramsForDentist = useParams ()

  const getSingleDentist = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/' + paramsForDentist.id)
    .then((response) => {
      return response.json()
    })
    setSingleDentist(data)
  }
  
  useEffect(() => {
    getSingleDentist()
  }, [])


  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='card'>
          <h4>{singleDentist.name}</h4>
          <h7>{singleDentist.email}</h7>
          <h7>{singleDentist.phone}</h7>
          <h7>{singleDentist.website}</h7>
      </div>
    </>
  )
}

export default Detail


