import SelectComponent from "react-select";

export const Select = ({ placeholder, name, onChange, options, hasError }) => {
  return (
    <SelectComponent
      options={options}
      onChange={(value) => {
        const event = {
          target: {
            name,
            value: value.value,
          },
        };
        onChange(event);
      }}
      name={name}
      placeholder={placeholder}
      styles={{
        control: (provided) => ({
          ...provided,
          borderRadius: "24px",
          textAlign: "left",
          borderColor: hasError ? "red" : "#9c9c9c",
          fontSize: 16,
        }),
        option: (provided) => ({
          ...provided,
          cursor: "pointer",
          borderRadius: "24px",
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: "24px",
        }),
        placeholder: (provided) => ({
          ...provided,
        }),
      }}
    />
  );
};
