import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([
    { name: "", age: "" }
  ]);

  const updateField = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields); // This should log the ARRAY
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => updateField(index, "name", e.target.value)}
            />
            
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => updateField(index, "age", e.target.value)}
            />
            
            <button type="button" onClick={() => removeField(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add More..
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;