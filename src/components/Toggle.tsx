import React from "react";

interface Props {
  handleChange: () => void;
  isChecked: boolean;
}

function Toggle({ handleChange, isChecked }: Props) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={handleChange}
        checked={isChecked}
      />
      <label className="form-check-label"></label>
    </div>
  );
}

export default Toggle;
