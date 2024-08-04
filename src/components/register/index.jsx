import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormComponents } from "../../config/loginFormComponents";

function RegisterComponent() {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const [registerFormData, setRegisterFormData] = useState(initialFormData);
  function handleRegisterOnSubmit(event) {
    event.preventDefault();
    console.log("formData: ", registerFormData);
    /** After all the API work is done */
    setRegisterFormData(initialFormData);
  }
  return (
    <div>
      <h1>Register Page/component</h1>
      <CommonForm
        formControls={registerFormComponents}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
}

export default RegisterComponent;
