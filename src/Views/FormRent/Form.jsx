import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getLocations,
  postProperty,
} from "../../Redux/action/actions.js";
import "./FormRent.css";
import validation from "./validation.js";

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
    image: file,
    description: "",
    numBeds: "",
    numBaths: "",
    nightPrice: "",
    homeCapacity: "",
    category: [],
    location: [],
  });
  const [errors, setErrors] = useState({});

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
    const errors = validation(postForm);
    setErrors(errors);
  };

  const handleImage = (e) => {
    const files = e.target.files;
    const fileList = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file instanceof Blob || file instanceof File) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageData = event.target.result;
          fileList.push(imageData);

          if (fileList.length === files.length) {
            setFile(fileList);
            setImage(fileList);
            previewFiles(fileList);
          }
        };

        if (file instanceof Blob) {
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const previewFiles = (files) => {
    const imagePreviews = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        imagePreviews.push(imageData);

        if (imagePreviews.length === files.length) {
          setImage(imagePreviews);
        }
      };

      if (files[i] instanceof Blob) {
        reader.readAsDataURL(files[i]);
      }
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

    const errors = validation(postForm);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
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
        password: UserData.password,
      };

      setFile(file);
      setProperty([...property, newProperty]);
      console.log("12", newProperty);

      dispatch(postProperty(newProperty));

      alert("Your property has been sucessfully published");
    } else {
      console.log("valident", errors);
      alert(`There's a Error in the form. Please fix them.`);
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
              {errors.title && <div className="error">{errors.title}</div>}
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
              {errors.nightPrice && (
                <div className="error">{errors.nightPrice}</div>
              )}
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
              {errors.homeCapacity && (
                <div className="error">{errors.homeCapacity}</div>
              )}
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
              {errors.description && (
                <div className="error">{errors.description}</div>
              )}
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
              {errors.numBaths && (
                <div className="error">{errors.numBaths}</div>
              )}
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
              {errors.numBeds && <div className="error">{errors.numBeds}</div>}
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
              {errors.category && (
                <div className="error">{errors.category}</div>
              )}
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
              {errors.location && (
                <div className="error">{errors.location}</div>
              )}
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
              {errors.image && <div className="error">{errors.image}</div>}

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
