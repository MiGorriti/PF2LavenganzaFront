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
  const [postForm, setPostForm] = useState({
    title: "",
    image: [],
    description: "",
    numBeds: "",
    numBaths: "",
    nightPrice: "",
    homeCapacity: "",
    category: [],
    availability: "",
    location: [],
  });
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
        availability: postForm.availability,
        Location: postForm.location,
      };
      setFile(file);
      setProperty([...property, newProperty]);

      dispatch(postProperty(newProperty));

      setPostForm({
        title: "",
        image: [],
        description: "",
        numBeds: "",
        numBaths: "",
        nightPrice: "",
        homeCapacity: "",
        category: [],
        availability: "",
        location: [],
      });
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
            <label class="col-md-4 control-label" for="textinput"></label>
            <div class="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="Title of your property"
                class="form-control input-md"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for=""></label>
            <div class="col-md-4">
              <input
                id=""
                name=""
                type="text"
                value={postForm.availability}
                placeholder="Availability"
                onChange={changeHandler}
                class="form-control input-md"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for=""></label>
            <div class="col-md-4">
              <input
                id=""
                name=""
                type="text"
                placeholder="Amount per night"
                value={postForm.nightPrice}
                onChange={changeHandler}
                class="form-control input-md"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for=""></label>
            <div class="col-md-4">
              <input
                id=""
                name=""
                type="text"
                value={postForm.homeCapacity}
                placeholder="Home Capacity"
                onChange={changeHandler}
                class="form-control input-md"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for=""></label>
            <div class="col-md-4">
              <textarea
                class="form-control"
                id=""
                name=""
                value={postForm.description}
                placeholder="Description"
                onChange={changeHandler}
              >
                Description
              </textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="checkboxes">
              How many baths?
            </label>
            <div class="col-md-4">
              <label className="cajasdecheck" for="checkboxes-0">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-0"
                  value={postForm.numBaths}
                  onChange={changeHandler}
                />
                1
              </label>
              <label className="cajasdecheck" for="checkboxes-1">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-1"
                  value="2"
                />
                2
              </label>
              <label className="cajasdecheck" for="checkboxes-2">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-2"
                  value="3"
                />
                3
              </label>
              <label className="cajasdecheck" for="checkboxes-3">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-3"
                  value="4"
                />
                4
              </label>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="checkboxes">
              How many beds?
            </label>
            <div class="col-md-4">
              <label className="cajasdecheck" for="checkboxes-0">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-0"
                  value={postForm.numBeds}
                  onChange={changeHandler}
                />
                1
              </label>
              <label className="cajasdecheck" for="checkboxes-1">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-1"
                  value="2"
                />
                2
              </label>
              <label className="cajasdecheck" for="checkboxes-2">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-2"
                  value="3"
                />
                3
              </label>
              <label className="cajasdecheck" for="checkboxes-3">
                <input
                  type="checkbox"
                  name="checkboxes"
                  id="checkboxes-3"
                  value="4"
                />
                4
              </label>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="selectbasic">
              Select Category
            </label>
            <div class="col-md-4">
              <select
                id="selectbasic"
                name="selectbasic"
                class="form-control"
                value={postForm.category}
                onChange={changeHandler}
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
            <label class="col-md-4 control-label" for="selectbasic">
              Select location
            </label>
            <div class="col-md-4">
              <select
                id="selectbasic"
                name="selectbasic"
                class="form-control"
                value={postForm.location}
                onChange={changeHandler}
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
                id="singlebutton"
                name="singlebutton"
                class="btn btn-primary"
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
