import "./Input.css";

function Input({
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="search-box"
    />
  );
}

export default Input;