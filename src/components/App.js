import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Store all fields in one array
  const [fields, setFields] = useState([
    { name: "", age: "" }
  ]);

  // Update name or age for a specific field
  const updateField = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  // Add new empty field
  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Remove field at index
  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Submit form - show data in console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
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
          Add More
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;