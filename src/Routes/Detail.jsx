import { useParams } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import { ContextGlobal } from "../Context/global.context";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {  
// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const { context} = useContext(ContextGlobal)
const {theme } = context

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
  <div className= {theme}>
      <h1>Detail Dentist: {singleDentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='tableDiv'>
        <table>
        <thead>
          <tr>
            <th>Name: </th>
            <th>Email:  </th>
            <th>Phone: </th>
            <th>Website:</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{singleDentist.name} </td>
              <td>{singleDentist.email}</td>
              <td>{singleDentist.phone}</td>
              <td>{singleDentist.website}</td>
            </tr>
        </tbody>
      </table>
      </div>
  </div>
    </>
  )
}

export default Detail