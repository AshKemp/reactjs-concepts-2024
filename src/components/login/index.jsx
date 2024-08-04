import { useState } from "react";
import { loginFormComponents } from "../../config/loginFormComponents";
import CommonForm from "../common-form";

function LoginComponent() {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log("formData: ", formData);
    /** After all the API work is done */
    setFormData(initialFormData);
  }
  return (
    <div>
      <h1>Login Page/component</h1>
      <CommonForm
        formControls={loginFormComponents}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
}

export default LoginComponent;
