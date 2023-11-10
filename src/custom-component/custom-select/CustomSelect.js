import { useState } from "react";
import Select, { components } from "react-select";

const optionTemplate = (users) => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <img
        className="me-3"
        src={users.data.avatarURL}
        style={{ width: 36 }}
        alt={users.data.id}
      />
      <span className="ml-2">{users.data.name}</span>
    </div>
  );
};

const { Option } = components;
const IconOption = (users) => (
  <Option {...users}>{optionTemplate(users)}</Option>
);

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <div className="d-flex align-items-center">
      <img
        className="me-3"
        src={props.data.avatarURL}
        style={{ width: 36 }}
        alt={props.data.label}
      />
      {children}
    </div>
  </components.SingleValue>
);

const CustomSelect = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // This callback is for lifting the state up to the parent
  };

  return (
    <Select
      value={selectedOption}
      options={options}
      getOptionLabel={(option) => option.label} // defines how to display the option content
      getOptionValue={(option) => option.value} // defines the value of the option
      placeholder="Please select a user"
      components={{ Option: IconOption, SingleValue }}
      onChange={handleSelect}
    />
  );
};

export default CustomSelect;
