import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getLocations,
  postProperty,
} from "../../Redux/action/actions.js";
import "./FormRent.css";

const Form = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getLocations());
  }, []);
  const [file, setFile] = useState([]);
  const [image, setImage] = useState([]);
  const [property, setProperty] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [postForm, setPostForm] = useState({
    title: "",
    image: [],
    description: "",
    numBeds: "",
    numBaths: "",
    nightPrice: "",
    homeCapacity: "",
    category: [],

    location: [],
  });
  console.log("algoalao", postForm);
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUserData(userData);

        // Utiliza la información del usuario aquí si es necesario
      } catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }
  }, []);
  const changeHandler = (e) => {
    const { name, value, direction } = e.target;

    setPostForm({
      ...postForm,
      [name]: value,
      [direction]: value,
    });
  };

  const handleImage = (e) => {
    const files = e.target.files;
    const fileList = [];
    let loadedCount = 0;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        fileList.push(imageData);
        loadedCount++;
        if (loadedCount === files.length) {
          setFile(fileList);
          setImage(fileList);
          previewFiles(fileList);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const previewFiles = (files) => {
    const imagePreviews = [];
    const readers = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      readers.push(reader);
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        imagePreviews.push(reader.result);
        if (imagePreviews.length === files.length) {
          setImage(imagePreviews);
        }
      };
    }
  };

  const selectCategory = (e) => {
    const categoryValue = e.target.value;
    setPostForm({
      ...postForm,
      category: [categoryValue],
    });
  };
  const numberbeds = [[1], [2], [3], [4]];
  const numberbaths = [[1], [2], [3], [4]];
  const submitHandler = async (e) => {
    e.preventDefault();

    if (postForm.category.length > 0) {
      const newProperty = {
        title: postForm.title,
        image: file,
        description: postForm.description,
        numBeds: postForm.numBeds,
        numBaths: postForm.numBaths,
        nightPrice: postForm.nightPrice,
        homeCapacity: postForm.homeCapacity,
        Category: postForm.category,

        Location: postForm.location,
        email: UserData.email,
        password: UserData.name,
      };
      setFile(file);
      setProperty([...property, newProperty]);
      console.log("12", newProperty);

      dispatch(postProperty(newProperty));

      alert("Your property has been sucessfully published");
    } else {
      alert(`There's a Error`);
    }
  };
  return (
    <div>
      <form class="form-horizontal" onSubmit={submitHandler}>
        <fieldset>
          <legend>Rent your House/Flat</legend>

          <div class="form-group">
            <label class="col-md-4 control-label" for="title"></label>
            <div class="col-md-4">
              <input
                name="title"
                type="text"
                placeholder="Title of your property"
                class="form-control input-md"
                onChange={changeHandler}
                value={postForm.title}
                style={{ backgroundColor: "#333" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="nightPrice"></label>
            <div class="col-md-4">
              <input
                name="nightPrice"
                type="number"
                placeholder="Amount per night"
                class="form-control input-md"
                onChange={changeHandler}
                value={postForm.nightPrice}
                style={{ backgroundColor: "#333" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="homeCapacity"></label>
            <div class="col-md-4">
              <input
                name="homeCapacity"
                type="number"
                placeholder="Home Capacity"
                class="form-control input-md"
                onChange={changeHandler}
                value={postForm.homeCapacity}
                style={{ backgroundColor: "#333" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="description"></label>
            <div class="col-md-4">
              <textarea
                class="form-control"
                name="description"
                placeholder="Description"
                onChange={changeHandler}
                value={postForm.description}
              >
                Description
              </textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="numBaths"></label>
            <div class="col-md-4">
              <input
                name="numBaths"
                type="number"
                placeholder="How many Baths"
                class="form-control input-md"
                onChange={changeHandler}
                value={postForm.numBaths}
                style={{ backgroundColor: "#333" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="numBeds"></label>
            <div class="col-md-4">
              <input
                name="numBeds"
                type="number"
                placeholder="How many Beds"
                class="form-control input-md"
                onChange={changeHandler}
                value={postForm.numBeds}
                style={{ backgroundColor: "#333" }}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="category"></label>
            <div class="col-md-4">
              <select
                name="category"
                class="form-control"
                onChange={changeHandler}
                value={postForm.category}
              >
                <option value="">Select Category</option>
                {category &&
                  category?.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="location"></label>
            <div class="col-md-4">
              <select
                name="location"
                class="form-control"
                onChange={changeHandler}
                value={postForm.location}
              >
                <option value="">Select Location</option>
                {location &&
                  location?.map((loc) => (
                    <option key={loc.id} value={loc.direction}>
                      {loc.direction}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" for="filebutton">
              Upload Images
            </label>
            <div class="col-md-4">
              <input
                id="filebutton"
                name="filebutton"
                class="input-file"
                type="file"
                multiple // Permite seleccionar múltiples imágenes
                onChange={handleImage}
              />
              <div className="botonimag">
                {file.length > 0 &&
                  file.map((imageData, index) => (
                    <img
                      class="w-18 h-16"
                      key={index}
                      src={imageData}
                      alt={`Preview ${index}`}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="singlebutton"></label>
            <div class="col-md-4">
              <button
                name="singlebutton"
                class="btn btn-primary"
                type="submit"
                onClick={submitHandler}
              >
                Publish
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
