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

    axios
      .post("https://apibackend-vpxw.onrender.com/review/create", newReview)
      .then((response) => {
        console.log("Añadida");
        alert("Review añadida");
      })
      .catch((error) => {
        console.log("error");
        alert("Error al crear review");
      });

    setInput({
      description: "",
      rating: "default",
      email: "",
      password: "",
    });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-black rounded shadow-lg">
        <h1 className="text-2xl text-center  p-4 bg-black text-white">
          Review box
        </h1>
        <h1 className="text-lg text-center  p-4 bg-black text-white">
          Write your review here:
          </h1>
      <textarea
        name="description"
        value={input.description}
        onChange={handleInputChange}
        className="w-full h-40 p-4 border border-gray-300 mb-4 rounded"
        placeholder="Comment here..."
      ></textarea>

      <select
        name="rating"
        onChange={handleInputChange}
        className="w-full p-4 bg-white text-black text-lg rounded cursor-pointer mb-4 border-black"
      >
        <option value="default">Rate</option>
        <option value="1">&#x2B50; Bad</option>
        <option value="2">&#x2B50;&#x2B50; Worthless</option>
        <option value="3">&#x2B50;&#x2B50;&#x2B50; Acceptable</option>
        <option value="4">&#x2B50;&#x2B50;&#x2B50;&#x2B50; Good</option>
        <option value="5">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50; Excellent</option>
      </select>

      <div className="mb-4">
        <h1 className="text-lg text-center  p-4 bg-black text-white">Email:</h1>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          className="w-full  border border-black mb-1 rounded"
        />
      </div>

      <div className="mb-4">
        <h1 className="text-lg text-center  p-4 bg-black text-white"> Password:</h1>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
          className="w-full border border-black rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-400 text-darkblue text-lg p-2 mt-4 rounded"
      >
        Post
      </button>
    </form>
  );
};

export default FormReviews;

