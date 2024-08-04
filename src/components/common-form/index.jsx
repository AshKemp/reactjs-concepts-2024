/* eslint-disable react/prop-types */

import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
function CommonForm({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) {
  function renderFormElement(getCurrentFormElement) {
    let content = null;
    switch (getCurrentFormElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            id={getCurrentFormElement?.id}
            type={getCurrentFormElement?.type}
            label={getCurrentFormElement?.label}
            name={getCurrentFormElement?.name}
            placeholder={getCurrentFormElement?.placeholder}
            value={formData[getCurrentFormElement?.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        content = (
          <CommonInput
            id={getCurrentFormElement?.id}
            type={getCurrentFormElement?.type}
            label={getCurrentFormElement?.label}
            name={getCurrentFormElement?.name}
            placeholder={getCurrentFormElement?.placeholder}
            value={formData[getCurrentFormElement?.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls &&
        formControls.map((singleFormElement) => {
          return renderFormElement(singleFormElement);
        })}
      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default CommonForm;
