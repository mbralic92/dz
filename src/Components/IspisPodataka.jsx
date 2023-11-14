import React, { useState } from "react";

const IspisPodataka = ({ user }) => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleColorChange = () => {
    setColors([...colors, color]);
    setColor("");
  };

  return (
    <div>
      <ul>
        {colors.map((color) => (
          <li key={color} style={{ color: color }}>
            {color}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button onClick={handleColorChange}>Unesi boju</button>
    </div>
  );
};

export default IspisPodataka;
