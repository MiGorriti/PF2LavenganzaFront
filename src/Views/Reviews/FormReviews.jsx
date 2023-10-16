import {useState} from 'react'
import axios from 'axios'

const FormReviews = ({id}) => {

    const [input, setInput]=useState({
        description:"", rating:"default", email:"", password:""
    })
    
    const handleInputChange=(event)=>{
        if(event.target.name==="rating"){
          event.target.value=Number(event.target.value);  
        }
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        const newReview={
            description:input.description, 
            rating:input.rating, 
            idHouse:id,
            email:input.email, 
            password:input.password
        }

        console.log(newReview)

        // dispatch(reserve(reservation));
        axios
        .post("http://localhost:3001/review/create", newReview)
        .then((response) => {
          // Si la respuesta es exitosa
          console.log("Añadida");
          alert("Review añadida");
        })
        .catch((error) => {
          // Si ocurre un error
          console.log("error");
          alert("Error al crear review");
        });

        
        setInput({description:"", rating:"default", email:"", password:""})
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="description">¡Puedes dejar una crítica constructiva aquí!</label>
        <input type="text" name='description' value={input.description} onChange={handleInputChange}/>

        <select name="rating" onChange={handleInputChange}>
            <option value="default">Califica este producto</option>
            <option value="1">&#x2B50; Mierda</option>
            <option value="2">&#x2B50;&#x2B50; Mediocre</option>
            <option value="3">&#x2B50;&#x2B50;&#x2B50; Aceptable</option>
            <option value="4">&#x2B50;&#x2B50;&#x2B50;&#x2B50; Bueno</option>
            <option value="5">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50; Excelente</option>
        </select>

        <div>
            Valida tus credenciales para continuar:
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={input.email} onChange={handleInputChange}/>

            <label htmlFor="password">Clave:</label>
            <input type="password" name='password' value={input.password} onChange={handleInputChange} />
        </div>
        <button type='submit' >Comentar</button>
    </form>
  )
}

export default FormReviews