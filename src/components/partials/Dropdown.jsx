import React from "react";

function DropDown({ title, options, func }) {
  return (
    <div className="select">
      <select defaultValue="0" onClick={func} name="format" id="format">
        <option className="bg-[#27272a]" value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option className="bg-[#27272a]" key={i} value={o}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
