import { useState } from "react";
import axios from "axios";

const FormReviews = ({ id }) => {
  const [input, setInput] = useState({
    description: "",
    rating: "default",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    if (event.target.name === "rating") {
      event.target.value = Number(event.target.value);
    }
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      description: input.description,
      rating: input.rating,
      idHouse: id,
      email: input.email,
      password: input.password,
    };

    console.log(newReview);

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

    setInput({ description: "", rating: "default", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">¡Write your review right here!</label>
      <textarea
        class="form-control"
        name="description"
        type="text"
        placeholder="Comment here"
        onChange={handleInputChange}
        value={input.description}
      >
        Comment..
      </textarea>

      <select name="rating" onChange={handleInputChange}>
        <option value="default">Rate </option>
        <option value="1">&#x2B50; Bad</option>
        <option value="2">&#x2B50;&#x2B50; Worthless</option>
        <option value="3">&#x2B50;&#x2B50;&#x2B50; Aceptable</option>
        <option value="4">&#x2B50;&#x2B50;&#x2B50;&#x2B50; Good</option>
        <option value="5">
          &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50; Excelent
        </option>
      </select>

      <div>
        Validate your data here:
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          style={{ marginBottom: "2px", backgroundColor: "#333" }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
          style={{ backgroundColor: "#333" }}
        />
      </div>
      <button type="submit" style={{ backgroundColor: "#4b4a4c" }}>
        Post
      </button>
    </form>
  );
};

export default FormReviews;
