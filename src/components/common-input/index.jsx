/* eslint-disable react/prop-types */
function CommonInput({ label, name, type, id, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder || "Enter value"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CommonInput;
