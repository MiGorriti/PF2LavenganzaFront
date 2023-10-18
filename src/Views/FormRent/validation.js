const regexName = /^[a-zA-Z\s]+$/;
const regexNumber = /^[0-9]\d*(\.\d+)?$/;
const errorRequired = "is required*";
const errorJustNumber = "Should contain only numbers*";

const validation = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = `The name ${errorRequired}`;
  } else if (regexNumber.test(values.title)) {
    errors.title = "The name is invalid, it should be a text";
  } else if (!regexName.test(values.title)) {
    errors.title = "Special characters are not allowed";
  } else if (values.title.length > 50) {
    errors.title = "The name should have a maximum of 50 characters";
  }

  if (!values.category) {
    errors.category = `The category ${errorRequired}`;
  }

  if (!values.description) {
    errors.description = `The description ${errorRequired}`;
  }

  if (!values.numBeds) {
    errors.numBeds = `The quantity ${errorRequired}`;
  } else if (!Number.isInteger(Number(values.numBeds))) {
    errors.numBeds = `The quantity should be an integer number`;
  }
  if (!values.numBaths) {
    errors.numBaths = `The quantity ${errorRequired}`;
  } else if (!Number.isInteger(Number(values.numBaths))) {
    errors.numBaths = `The quantity should be an integer number`;
  }

  if (!values.homeCapacity) {
    errors.homeCapacity = `Home capacity ${errorRequired}`;
  } else if (!Number.isInteger(Number(values.homeCapacity))) {
    errors.homeCapacity = `Home capacity must be an integer`;
  }
  if (!values.location) {
    errors.location = `The location ${errorRequired}`;
  }

  return errors;
};

export default validation;
