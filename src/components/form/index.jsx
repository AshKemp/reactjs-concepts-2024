/* eslint-disable no-unused-vars */
import { useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleInputChange(event) {
    const { value } = event.target;
    setNameValue(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmailValue(value);
  }

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name: ", nameValue, " Email: ", emailValue);
  }

  console.log(formData);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleOnChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default FormComponent;
