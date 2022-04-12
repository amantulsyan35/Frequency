export const FormInput = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  name,
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder ? placeholder : null}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
