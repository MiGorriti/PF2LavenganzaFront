import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getLocations,
  postProperty,
} from "../../Redux/action/actions.js";


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
    <div class="bg-gray-400 p-5 rounded-md">
      <form onSubmit={submitHandler}>
        <div class="w-30 h-30">
          <div class="m-4 rounded-md">
            <input
              type="text"
              name="title"
              value={postForm.title}
              placeholder="Title For Your Property"
              onChange={changeHandler}
            />
          </div>

          <div class="m-4 rounded-md">
            <input
              type="text"
              name="description"
              value={postForm.description}
              placeholder="Description of Your Property"
              onChange={changeHandler}
            />
          </div>

          <div class="m-4 rounded-md">
            <input
              type="text"
              name="numBeds"
              value={postForm.numBeds}
              placeholder="Number of Beds From Your Property"
              onChange={changeHandler}
            />
          </div>

          <div class="m-4 rounded-md">
            <input
              type="text"
              name="numBaths"
              value={postForm.numBaths}
              placeholder="Number of Baths From Your Property"
              onChange={changeHandler}
            />
          </div>

          <div class="m-4">
            <input
              type="text"
              name="nightPrice"
              value={postForm.nightPrice}
              placeholder="Mount Per Night"
              onChange={changeHandler}
            />
          </div>
          <div class="m-4">
            <input
              type="text"
              name="homeCapacity"
              value={postForm.homeCapacity}
              placeholder="Home Capacity"
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="availability"
              value={postForm.availability}
              placeholder="Availability"
              onChange={changeHandler}
            />
          </div>
          <div class="m-4">
            <input type="file" multiple name="image" onChange={handleImage} />
          </div>

          <div>
            <select
              name="category"
              value={postForm.category}
              onChange={changeHandler}
            >
              <option value="">Select a Category</option>
              {category &&
                category?.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
            </select>
          
          </div>

          <button type="submit" class="w-25 h-11 mt-3 ">
            {" "}
            Publish
          </button>
        </div>
      </form>
      <div class="max-h-20 max-w-20 flex space-x-2">
        {image &&
          image.map((img, index) => (
            <img
              class="w-18 h-16"
              key={index}
              src={img}
              alt={`Preview ${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Form;
