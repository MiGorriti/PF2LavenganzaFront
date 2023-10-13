import { useState } from "react";
import axios from "axios";
// import { reserve } from "../../Redux/action/actions";

const FormReserva = ({id}) => {

    let i=0;

    const meses=[
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ]

    const [input, setInput]=useState({
        month: "default", numHuespedes:0, email:"", password:""
    })
    
    const handleInputChange=(event)=>{
        if(event.target.name==="numHuespedes" || event.target.name==="month"){
          event.target.value=Number(event.target.value);  
        }
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        const newReservation={
            month:input.month,
            numHuespedes:input.numHuespedes, 
            idHome:id, 
            email:input.email, 
            password:input.password
        }

        console.log(newReservation)

        // dispatch(reserve(reservation));
        axios
        .post("http://localhost:3001/reservation/create", newReservation)
        .then((response) => {
          // Si la respuesta es exitosa
          console.log("Añadida");
          alert("Reservación añadida");
        })
        .catch((error) => {
          // Si ocurre un error
          console.log("error");
          alert("Error al crear review");
        });

        
        setInput({ month:"default", numHuespedes:0, email:"", password:""})
    }

  return (
    <form onSubmit={handleSubmit}>
         <div>
            <select name="month" onChange={handleInputChange} >
                <option value="default">Month</option>
                {
                    meses.map((mes)=>{
                        i++
                        return <option value={i}>{mes}</option>
                    })
                } 
            </select>
        </div>

        <label htmlFor="numHuespedes">Guests</label>
        <input type="number" name="numHuespedes" value={input.numHuespedes} onChange={handleInputChange} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={input.email} onChange={handleInputChange} />
        
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={input.password} onChange={handleInputChange} />

        <button type="submit">Reservar</button>
    </form>
  )
}

export default FormReserva