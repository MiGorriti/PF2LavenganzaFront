import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReservations } from '../../Redux/action/actions'
import { useState } from 'react'

const Reservations = () => {

    const [userData, setUserData]= useState([]);

    console.log(userData);

    const meses=[
        "January", "february", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ]

    useEffect(()=>{
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUserData(userData)
        // Utiliza la información del usuario aquí si es necesario
      } catch (error) {
        console.error('Error al parsear JSON:', error);
      }
    }
  }, [])

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getReservations("pepito@gmail.com"))  //EL EMAIL FUE HARDCODEADO PARA HACER LAS PRUEBAS
    },[dispatch]);

    const reservations=useSelector((state)=> state.reservations)

  return (
    <div>
        <h1>Your reservations</h1>
        <div>
            <li>
            {
                reservations.map((res)=>{ 
                    return <ul>
                        <h2>{res.PropertyTitle}</h2>
                        <h2>Month: {meses[res.month+1]}</h2>
                        <h2>Guests: {res.numHuespedes}</h2>
                  </ul>
                })
            }
            </li>
        </div>
    </div>
  )
}

export default Reservations